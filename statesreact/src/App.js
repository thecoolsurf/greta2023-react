import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Components/Home/Home.js';
import { Header } from './Components/Header/Header.js';
import { Footer } from './Components/Footer/Footer.js';
import { Counters } from './Components/Counters/Counters.js';
import { Squares } from './Components/Squares/Squares.js';
import { Circles } from './Components/Circles/Circles.js';
import { Next } from './Components/Next/Next.js';
import { FastGoodCheap } from './Components/FalstGoodCheap/FastGoodCheap.js';
import { Configurator } from './Components/Configurator/Configurator.js';
import { Converter } from './Components/Converter/Converter.js';

function App() {

  // on recupere une variable et la facon de la changer
  const [classSquare, setClassSquare] = useState('bkg-orange');
  const [selector, setSelector] = useState(null);

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="counters" element={<Counters />} />
        <Route path="squares" element={<Squares />} />
        <Route path="circles" element={<Circles />} />
        <Route path="next" element={<Next />} />
        <Route path="fastgoodcheap" element={<FastGoodCheap />} />
        <Route path="configurator" element={<Configurator />} />
        <Route path="converter" element={<Converter />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
