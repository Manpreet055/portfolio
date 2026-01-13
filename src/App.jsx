import "./index.css";
import HeroSection from "./sections/HeroSection";
import NavbarComponent from "./layout/Navbar";
import About from "./sections/About";
function App() {
  return (
    <>
      <NavbarComponent />
      <HeroSection />
      <About />
    </>
  );
}

export default App;
