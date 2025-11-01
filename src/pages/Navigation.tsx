import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import Button from "../components/Button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(true);
  const scrollToSection = (section: string) => {
    setActiveSection(section.substring(1));
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        console.log("scrolled bro !");
      }

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
        // scrolled
        true
          ? "bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xl text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-cyan-400 cursor-pointer"
            onClick={() => scrollToSection("#home")}
          >
            &lt;AM /&gt;
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="relative text-white/70 hover:text-white transition-colors group cursor-pointer"
                title={item.name}
              >
                {activeSection === item.href.substring(1) && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-linear-to-r from-purple-500 to-cyan-500"
                    transition={{
                      type: "spring",
                      bounce: 0.2,
                      duration: 0.6,
                    }}
                  />
                )}
              </Button>
            ))}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
              <Button
                size="sm"
                className="bg-linear-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 border-0 rounded-[20px] py-1 px-3 cursor-pointer"
                onClick={() => scrollToSection("#contact")}
                title="Let's Talk"
              />
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            // onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white/70 hover:text-white transition-colors"
          >
            {isOpen ? (
              <X
                className="w-6 h-6 cursor-pointer"
                onClick={() => setIsOpen(false)}
              />
            ) : (
              <Menu
                className="w-6 h-6 cursor-pointer"
                onClick={() => setIsOpen(true)}
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.href)}
                  className={`block w-full text-left py-2 px-4 rounded-lg transition-colors  cursor-pointer ${
                    activeSection === item.href.substring(1)
                      ? "text-white bg-white/10"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.name}
                </motion.button>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.3,
                  delay: navItems.length * 0.1,
                }}
              >
                <Button
                  className="w-full bg-linear-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 border-0"
                  onClick={() => scrollToSection("#contact")}
                  title="Let's Talk"
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
