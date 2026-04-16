import { motion } from "motion/react";
import me from "@/assets/me-3.jpg";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* ---- Left content ---- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="order-2 lg:order-1 text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6 group transition-all duration-300 cursor-default">
            <Sparkles className="w-5 h-5 text-indigo-400 group-hover:rotate-12 transition-transform" />
            <span className="text-indigo-400 text-sm font-medium tracking-wide uppercase">
              Frontend Developer
            </span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold mb-6 tracking-tight">
            Building digital <br />
            <span className="text-zinc-500">experiences.</span>
          </h1>

          <p className="text-zinc-400 text-lg max-w-xl mb-8 leading-relaxed">
            I specialize in crafting high-performance, accessible, and
            user-centered web applications using Next.js and React.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-zinc-200 transition-colors w-full sm:w-auto cursor-pointer"
            >
              Contact Me
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.05)" }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-3 bg-transparent border border-zinc-800 text-white font-semibold rounded-lg transition-all w-full sm:w-auto flex items-center justify-center gap-2 group cursor-pointer"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </motion.div>

        {/* ---- Right Image ---- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          <div className="relative group">
            {/* Elegant backdrop */}
            <div className="absolute -inset-1 bg-linear-to-r from-indigo-500 to-blue-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>

            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl">
              <img
                src={me}
                alt="Developer Portrait"
                className="w-full h-full object-cover grayscale-0 md:grayscale opacity-90 md:opacity-80 md:group-hover:grayscale-0 md:group-hover:opacity-100 transition-all duration-700"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
