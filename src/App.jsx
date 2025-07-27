import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main className="relative min-h-screen w-screen object-center bg-zinc-600">
      <Navbar />
      <Hero />
      <About />
    </main>
  );
}

export default App;
