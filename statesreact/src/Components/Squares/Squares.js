import './squares.css';
import { useState } from 'react';
import { Statments } from './Statments';

export const Squares = () => {

    // on recupere une variable et la facon de la changer
    const [square1, setSquare1] = useState('square bkg-orange');
    const [square2, setSquare2] = useState('square bkg-orange');
    const [square3, setSquare3] = useState('square bkg-orange');
    const [selector, setSelector] = useState(null);

    return (
        <div className="squares">
            <Statments />
            <div className="rows">
                <div className={square1} onClick={() => {
                    if (square1 === 'square bkg-orange') {
                        setSquare1('square bkg-green');
                    } else { 
                        setSquare1('square bkg-orange');
                    }
                }
                }></div>
                <div className={square2} onClick={() => {
                    if (square2 === 'square bkg-orange') {
                        setSquare2('square bkg-green');
                    } else { 
                        setSquare2('square bkg-orange');
                    }
                }
                }></div>
                <div className={square3} onClick={() => {
                    if (square3 === 'square bkg-orange') {
                        setSquare3('square bkg-green');
                    } else { 
                        setSquare3('square bkg-orange');
                    }
                }
                }></div>
            </div>
        </div>
    );
}


