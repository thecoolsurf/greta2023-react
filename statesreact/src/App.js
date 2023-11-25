import './App.css';
import { useState } from 'react';
import { Counters } from './Components/Counters/Counters.js';
import { Squares } from './Components/Squares/Squares.js';
import { Circles } from './Components/Circles/Circles.js';
import { Next } from './Components/Next/Next.js';

function App() {

  // on recupere une variable et la facon de la changer
  const [classSquare, setClassSquare] = useState('bkg-orange');
  const [selector, setSelector] = useState(null);

  return (
    <div className="App">
      <Counters />
      <Squares/>
      <Circles/>
      <Next/>
    </div>
  );
}

export default App;
