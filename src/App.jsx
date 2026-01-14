import "./index.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NavbarComponent from "./layout/navigation/Navbar";
import HeroSection from "./sections/HeroSection";
import About from "./sections/About";
import Projects from "./sections/Projects";
function App() {
  return (
    <Router>
      <NavbarComponent />
      <main>
        <HeroSection />
        <About />
        <Projects />
      </main>
    </Router>
  );
}

export default App;
