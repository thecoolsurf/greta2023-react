import './App.css';
import { useState } from 'react';

function App() {

  // on recupere une variable et la facon de la changer
  const [classSquare, setClassSquare] = useState('bkg-orange');
  const [selector, setSelector] = useState(null);

  return (
    <div className="App">
      <div className="main">
        <div className="infos">
          <h1>COMPTEURS</h1>
          <h2>Exercice #2</h2>
          <ul>
            <li>Faire des carres de couleurs. En cliquant dessus, ils changent de couleurs ou reprennent leur couleurs.</li>
          </ul>
        </div>
        <div className="rows">
          <div onClick={() => { setSelector(0); }} className = {selector === 0 ? 'bkg-green' : 'bkg-orange'}></div>
          </div>
        </div>
      </div>
  );
}

export default App;
