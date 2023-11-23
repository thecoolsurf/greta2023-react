import './App.css';
import { useState } from 'react';

function App() {

  // on recupere une variable et la facon de la changer
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [total, setTotal] = useState(0);
  const [classBtn, setClassBtn] = useState('btn display');

  return (
    <div className="App">

      <div className="main">

        <div className="infos">
          <h1>COMPTEURS</h1>
          <h2>Exercice #1</h2>
          <ul>
            <li>1 - Faites un compteur simple avec un bouton + et un bouton</li>
            <li>2 - Faites en sorte qu’il soit impossible d’aller en dessous de zéro</li>
            <li>3 - Faites en sorte qu’il soit impossible d’aller au dessus de 11</li>
            <li>4 - Faites un second compteur indépendant du premier</li>
            <li>5 - Affichez le total des deux compteurs</li>
          </ul>
          <h2>Bonus 1</h2>
          <ul>
            <li>- Faites en sorte que si le total des 2 compteurs est supérieur à 18, il est impossible d’incrémenter ni le premier ni le deuxième</li>
          </ul>
          <h2>Bonus 2</h2>
          <ul>
            <li>- Faites en sorte que en dessous de zéro : le bouton “-” disparaisse et au dessus de 11 le bouton “+” disparait</li>
            <li>- Faites en sorte que si le total des 2 compteurs est supérieur à 18, les deux boutons + disparaissent (on ne peut plus incrémenter)</li>
          </ul>
        </div>

        <div className="counter">
          <div className="count1">{num1}</div>
          <div className="buttons">
            <button className={classBtn} type="button" onClick={() => {
              if (num1 < 11) {
                setNum1(num1 + 1);
                setTotal(num1 + num2 + 1);
              }
              if (total === 18) {
                setClassBtn('btn hidden');
              } else {
                setClassBtn('btn display');
              }
            }}>+</button>
            <button className="btn" type="button" onClick={() => {
              if (num1 > 0) {
                setNum1(num1 - 1);
                setTotal(num1 + num2 - 1);
              }
            }}>-</button>
          </div>

        </div>

        <div className="counter">
          {/* {num1+num2 < 10 ? <div></div> : ''} */}
          <div className="count2">{num2}</div>
          <div className="buttons">
            <button className={classBtn} type="button"  onClick={() => {
              if (num2 < 11) {
                setNum2(num2 + 1);
                setTotal(num1 + num2 + 1);
              }
              if (total === 18) {
                setClassBtn('btn hidden');
              } else {
                setClassBtn('btn display');
              }
            }}>+</button>
            <button className="btn" type="button" onClick={() => {
              if (num2 > 0) {
                setNum2(num2 - 1);
                setTotal(num1 + num2 - 1);
              }
            }}>-</button>
          </div>
        </div>

        <div className="counter">
          <div className="total">{total}</div>
        </div>

      </div>

    </div>
  );
}

export default App;
