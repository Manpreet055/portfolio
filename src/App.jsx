import "./index.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NavbarComponent from "./layout/navigation/Navbar";
import HeroSection from "./sections/HeroSection";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import FooterSection from "./sections/Footer";
function App() {
  return (
    <>
      <NavbarComponent />
      <main className="mt-20">
        <HeroSection />
        <About />
        <Projects />
        <Contact />
        <FooterSection />
      </main>
    </>
  );
}

export default App;
