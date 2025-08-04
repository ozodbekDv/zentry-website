import Features from "./components/Features";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main className="relative min-h-screen w-screen object-center">
      <Navbar />
      <Hero />
      <About />
      <Features />
    </main>
  );
}

export default App;
