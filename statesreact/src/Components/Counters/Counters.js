import './counters.css';
import { useState } from 'react';
import { Statments} from './Statments.js';

export const Counters = () => {

  // on recupere une variable et la facon de la changer
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [total, setTotal] = useState(0);
  const [classBtn, setClassBtn] = useState('btn display');

  return (
    <div className="counters">
      <Statments/>

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
          <button className={classBtn} type="button" onClick={() => {
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
  );
}

