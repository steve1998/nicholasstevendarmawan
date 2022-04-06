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
        <div className="flex flex-col justify-between h-screen">
          <div>
            <Navbar />
          </div>
          <div>
            <Hero />
          </div>
          <div className="h-1/4"></div>
        </div>
        <div className="mb-32">
          <Work />
        </div>
        <div className="mb-32">
          <Projects />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
