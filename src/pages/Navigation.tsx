import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import Button from "../components/Button";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.svg";
const Navigation = () => {
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const scrollToSection = (section: string) => {
    document
      .getElementById(`${section.substring(1)}`)
      ?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(section.substring(1));
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navItems.map((item) => item.href.substring(1));
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? "bg-black/40 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            className="text-lg font-bold tracking-tighter cursor-pointer flex items-center gap-2"
            onClick={() => scrollToSection("#home")}
          >
            <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
              <span className="text-black text-xl font-black">B</span>
            </div>
            {/* <span className="hidden sm:inline">BUNYAMIN</span> */}
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`relative text-sm font-medium transition-all duration-300 cursor-pointer ${
                  activeSection === item.href.substring(1)
                    ? "text-white"
                    : "text-zinc-500 hover:text-white"
                }`}
              >
                {item.name}
                {activeSection === item.href.substring(1) && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-white"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
            
            <button
              onClick={() => scrollToSection("#contact")}
              className="px-5 py-2 rounded-full border border-zinc-800 text-sm font-medium hover:bg-white hover:text-black transition-all cursor-pointer"
            >
              Let's talk
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors cursor-pointer"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-20 left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-zinc-900"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    setIsOpen(false);
                    setTimeout(() => scrollToSection(item.href), 100);
                  }}
                  className={`text-2xl font-semibold transition-colors text-left cursor-pointer ${
                    activeSection === item.href.substring(1)
                      ? "text-white"
                      : "text-zinc-600"
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => {
                  setIsOpen(false);
                  setTimeout(() => scrollToSection("#contact"), 100);
                }}
                className="mt-4 px-6 py-3 rounded-xl bg-white text-black font-semibold text-center cursor-pointer"
              >
                Let's talk
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
