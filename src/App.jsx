import { react, testing } from "./assets/Index";
import { testing2 } from "./constants/AllConstants";
import Header from "./components/Header";
import { AuroraBackgroundDemo } from "./components/Background/LightingBG";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Header />
      <Home />
      {/* <div>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <img src={testing} />
        <img src={react} />
        <ul className={`flex`}>
          {testing2.map((icon, index) => (
            <li className="p-5 flex flex-col " key={index}>
              <img src={icon} width={24} height={25} alt={icon} />
            </li>
          ))}
        </ul>
      </div> */}
    </>
  );
}

export default App;
