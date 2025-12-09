import HeroSection from "./components/HeroSection"; 
import About from "./components/About";
import Projects from "./components/Projects"; // <--- Import this

function App() {
  return (
    <main className="bg-black">
      <HeroSection />
      <About />
      <Projects /> {/* <--- Add this */}
    </main>
  );
}

export default App;