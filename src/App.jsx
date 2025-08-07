import Features from "./components/Features";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Story from "./components/Story";

function App() {
  return (
    <main className="relative min-h-screen w-screen object-center">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Story />
    </main>
  );
}

export default App;
