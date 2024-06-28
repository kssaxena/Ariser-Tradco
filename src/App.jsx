import { react, testing } from "./assets/Index";
import { testing2 } from "./constants/AllConstants";
import Header from "./components/Header";
import { AuroraBackgroundDemo } from "./components/Background/LightingBG";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import Slider from "./components/Slider";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Slider/>
      <About />
      <Footer/>
    </>
  );
}

export default App;
