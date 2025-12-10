import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection"; 
import About from "./components/About";
import Projects from "./components/Projects"; 
import Contact from "./components/Contact"; 

function App() {
  return (
    <main className="bg-black">
      <Navbar />
      <HeroSection />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;