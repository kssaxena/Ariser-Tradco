import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import Slider from "./components/Slider";
import Contact from "./components/Contact";
import ProductSlider from "./components/ProductSlider";
import { Routes, Route } from "react-router-dom";
import ProductPopUp from "./components/ProductPopUp";
import ContactForm from "./components/ContactForm";
import Test from "./components/test";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Slider />
      <ProductSlider />
      {/* <Routes>
        <Route exact path="/productDescription/:id" element={<ProductPopUp />} />
      </Routes> */}
      <About />
      <Contact />
      <Footer />
      {/* <Test />{" "} */}
    </>
  );
}

export default App;
