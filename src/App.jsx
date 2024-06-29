// import { react, testing } from "./assets/Index";
// import { testing2 } from "./constants/AllConstants";
import Header from "./components/Header";
// import { AuroraBackgroundDemo } from "./components/Background/LightingBG";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import Slider from "./components/Slider";
// import ContactForm from "./components/ContactForm";
import Contact from "./components/Contact";
import ProductSlider from "./components/ProductSlider";
// import ProductCard from "./components/ProductCard";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Slider />
      <ProductSlider />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
