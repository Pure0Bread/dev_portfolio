import HeroSection from "./components/HeroSection"; 
import About from "./components/About";
import Projects from "./components/Projects"; 
import Contact from "./components/Contact"; // <--- Import this

function App() {
  return (
    <main className="bg-black">
      <HeroSection />
      <About />
      <Projects />
      <Contact /> {/* <--- Add this */}
    </main>
  );
}

export default App;