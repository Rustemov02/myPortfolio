import { motion } from "motion/react";
import logo from "../assets/logo.svg";

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
          <div className="-mt-10 text-xl text-purple-400 flex items-center justify-center">
            {" "}
            <img src={logo} alt="" className="h-24 w-20 scale-1.8" />
          </div>
          <p className="text-white/60 mb-4 flex items-center justify-center gap-2">
            Designed & Built with by Rustamov
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
