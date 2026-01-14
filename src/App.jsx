import "./index.css";
import HeroSection from "./sections/HeroSection";
import NavbarComponent from "./layout/navigation/Navbar";
import About from "./sections/About";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <NavbarComponent />
      <main>
        <Routes>
          <Route path="/" element={<HeroSection />} />
        </Routes>
      </main>
      <About />
    </Router>
  );
}

export default App;
