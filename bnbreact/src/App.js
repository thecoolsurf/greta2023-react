//import defaultvalue, { title, baseline } from "./Components/Datas/Datas.js";
import { Header } from "./Components/Header/Header.js";
import { Footer } from "./Components/Footer/Footer.js";
import { Section } from "./Components/Section/Section.js";

import './App.css';

// console.log(defaultvalue);

const App = () => {
  return (
    <div className="App">
      <Header />
      <Section />
      <Footer />
    </div>
  );
}

export default App;
