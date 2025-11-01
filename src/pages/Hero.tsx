import { useRef } from "react";
import AnimatedBackground from "../components/AnimatedBackground";
import { motion, useScroll, useTransform } from "motion/react";
import me from "@/assets/me-3.jpg";

const Hero = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const avatarY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <AnimatedBackground />

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
    </section>
  );
};

export default Hero;
