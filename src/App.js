import "./App.css";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Work from "./components/Work";

function App() {
  return (
    <div className="h-full w-full flex flex-col">
      <div className="font-poppins px-8 py-8 lg:px-[420px]">
        <Navbar />
        <Hero />
        <Work />
        <Projects />
      </div>
      <Footer />
    </div>
  );
}

export default App;
