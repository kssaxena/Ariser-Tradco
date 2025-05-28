import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Slider from "./components/Slider";
import Contact from "./components/Contact";
import ProductSlider from "./components/ProductSlider";
import { Routes, Route } from "react-router-dom";
import Praise from "./components/Praise";
// import ContactPopUp from "./components/ProductPopUp";

function App() {
  return (
    <div className="overflow-hidden font-Fredoka bg-[#DEDFD8]">
      <Header />
      <Home />
      <Slider />
      <ProductSlider />
      <Praise />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
