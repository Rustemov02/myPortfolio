import { motion } from "motion/react";

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden hidden md:block">
      <motion.div
        className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 10,
          repeat: 0,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-cyan-500/30 rounded-full blur-3xl"
        animate={{
          scale: [1.3, 1, 1.3],
          opacity: [0.3, 0.6, 0.3],
          x: [0, -50, 0],
        }}
        transition={{
          duration: 10,
          repeat: 0,
          ease: "easeInOut",
        }}
      />

      {/* Particle effect - floating orbs */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white/20 rounded-full"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + i * 10}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: 0,
            delay: i * 0.2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
