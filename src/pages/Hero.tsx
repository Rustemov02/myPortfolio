import { useRef } from "react";
import AnimatedBackground from "../components/AnimatedBackground";
import { motion, useScroll, useTransform } from "motion/react";
import me from "@/assets/me-3.jpg";
import { ArrowRight, Badge, Eye, Sparkles } from "lucide-react";
import Button from "../components/Button";

const Hero = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const avatarY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      <AnimatedBackground />
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          style={{ y: contentY }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-2 lg:order-1 text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-6 mt-12 md:mt-0"
          >
            <div className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-linear-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10 backdrop-blur-md border border-white/10">
              <Sparkles className="w-8 h-8 text-purple-400" />
              <span className="bg-clip-text text-[25px]  ">
                Junior Frontend Developer{" "}
              </span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-white/70 text-lg max-w-xl mb-8 mx-auto lg:mx-0 leading-relaxed"
          >
            I build modern, high-performance web applications using Next.js,
            React, and Tailwind CSS — with clean code, smooth performance, and a
            strong focus on user experience.{" "}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                size="lg"
                className="relative cursor-pointer rounded-lg py-2 overflow-hidden bg-linear-to-r from-purple-600 via-pink-600 to-cyan-600 hover:from-purple-500 hover:via-pink-500 hover:to-cyan-500 border-0 shadow-2xl shadow-purple-500/50 group px-8"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Hire Me
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-linear-to-r from-purple-400 to-cyan-400 opacity-0 group-hover:opacity-30 blur-xl transition-opacity"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="z-10"
            >
              <Button
                // size="lg"
                // variant="outline"
                className="bg-white/5 flex items-center outline-none cursor-pointer rounded-lg py-2 backdrop-blur-md border border-white/20 hover:bg-white/10 hover:border-white/30 text-white px-8 group"
                onClick={() => {
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <Eye className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                View Projects
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: avatarY }}
          initial={{ opacity: 0, scale: 0.8, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="order-1 lg:order-2 relative flex justify-center lg:justify-end"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="w-[400px] h-[400px] bg-linear-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full blur-3xl opacity-40"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>

          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            <div className="w-[420px] h-[420px] rounded-full border border-white/5" />
          </motion.div>
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            <div className="w-[460px] h-[460px] rounded-full border border-white/5" />
          </motion.div>

          <div className="relative z-10">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-linear-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full blur-xl opacity-60 animate-pulse" />

              <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full overflow-hidden border-4 border-white/10 backdrop-blur-sm bg-white/5 shadow-2xl">
                <img
                  src={me}
                  alt="Developer Portrait"
                  className="w-full h-full object-cover"
                />

                <motion.div className="absolute inset-0 bg-linear-to-t from-purple-900/50 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
              </div>

              <motion.div
                className="absolute -top-4 -right-4 bg-linear-to-br from-purple-500 to-pink-500 rounded-xl p-3 backdrop-blur-md border border-white/20 shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="text-2xl">⚛️</span>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 bg-linear-to-br from-cyan-500 to-blue-500 rounded-xl p-3 backdrop-blur-md border border-white/20 shadow-lg"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              >
                <span className="text-2xl">🚀</span>
              </motion.div>

              <motion.div
                className="absolute top-1/2 -right-8 bg-linear-to-br from-pink-500 to-purple-500 rounded-xl p-3 backdrop-blur-md border border-white/20 shadow-lg"
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                <span className="text-2xl">✨</span>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-24 left-1/2 -translate-x-1/2 hidden lg:block"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
            <motion.div
              className="w-1.5 h-1.5 bg-white/60 rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
