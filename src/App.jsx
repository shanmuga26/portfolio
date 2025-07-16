import About from "./components/About";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Footer from "./components/Footer";   // ← NEW
import NavDots from "./components/NavDots";

function App() {
  return (
    <div
      className="relative min-h-screen text-white font-sans overflow-x-hidden"
      style={{
        background: "#0f172a",
      }}
    >
      {/* ECG Animated Background */}
      <div
        className="absolute top-0 left-0 w-full h-24 animate-ecg z-0"
        style={{
          backgroundImage: "url('/assets/ecg.svg')", // file must be in public/assets
          backgroundRepeat: "repeat-x",
          backgroundSize: "1600px 100px",
          backgroundPosition: "0 20px",
          opacity: 0.2,
        }}
      ></div>

      {/* Page Content */}
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Footer />     {/* ← NEW */}
      <NavDots />
    </div>
  );
}

export default App;
