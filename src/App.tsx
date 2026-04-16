import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Hero from "./pages/Hero";
import Navigation from "./pages/Navigation";
import Projects from "./pages/Projects";
import ToastProvider from "./utils/ToastProvider";

const App = () => {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white overflow-x-hidden selection:bg-indigo-500/30">
      {/* Dynamic Background - Minimalist version */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(63,63,70,0.15),rgba(0,0,0,0))]" />
      </div>

      <div>
        <div className="relative z-10">
          <Navigation />
          <main>
            <div id="home">
              <Hero />
            </div>
            <About />

            <Projects />
            <Contact />
            <Footer />
          </main>
        </div>
      </div>

      <ToastProvider />
    </div>
  );
};

export default App;
