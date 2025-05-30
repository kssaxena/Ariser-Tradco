import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Products from "./components/Products";
import Praise from "./components/Praise";
import About from "./components/About";
// import ContactPopUp from "./components/ProductPopUp";

function App() {
  return (
    <div className="overflow-hidden font-Fredoka bg-[#DEDFD8]">
      <Header />
      <Home />
      <About />
      <Products />
      <Praise />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
