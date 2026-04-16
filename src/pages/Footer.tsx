

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-white flex items-center justify-center">
            <span className="text-black text-xs font-black">B</span>
          </div>
          <span className="font-bold tracking-tighter text-sm">BUNYAMIN.</span>
        </div>
        
        <div className="text-zinc-500 text-sm">
          © {currentYear} — Built with React & Tailwind.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
