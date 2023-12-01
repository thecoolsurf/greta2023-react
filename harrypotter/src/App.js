import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './Components/Header/Header.js';
import { Footer } from './Components/Footer/Footer.js';
import { Header } from './Components/Header/Header.js';
import { Footer } from './Components/Footer/Footer.js';
import { Home } from './Containers/Home/Home.js';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Gryffindor" element={<Gryffindor />} />
        <Route path="/Hufflepuff" element={<Hufflepuff />} />
        <Route path="/Ravenclaw" element={<Ravenclaw />} />
        <Route path="/Slytherin" element={<Slytherin />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
