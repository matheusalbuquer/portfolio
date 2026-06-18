import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

import Technologies from "./components/Technologies/Technologies";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />

      <Projects />

      <Technologies />
      <Footer />
    </div>
  );
}

export default App;
