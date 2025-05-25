import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import Slider from "./components/Slider";
import Contact from "./components/Contact";
import ProductSlider from "./components/ProductSlider";
import { Routes, Route } from "react-router-dom";
// import ContactPopUp from "./components/ProductPopUp";

function App() {
  return (
    <div className="overflow-hidden font-Fredoka">
      <Header />
      <Home />
      <Slider />
      <ProductSlider />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
