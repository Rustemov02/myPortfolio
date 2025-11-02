import { Heart } from "lucide-react";
import { motion } from "motion/react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="mb-4 text-xl text-purple-400">&lt;AM /&gt;</div>
          <p className="text-white/60 mb-4 flex items-center justify-center gap-2">
            Designed & Built with
            <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
            by Rustamov
          </p>
          <p className="text-white/40 text-sm">
            © {currentYear} All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
