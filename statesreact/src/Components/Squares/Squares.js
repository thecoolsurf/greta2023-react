import './squares.css';
import { useState } from 'react';
import { Statments } from './Statments';

export const Squares = () => {

    // on recupere une variable et la facon de la changer
    // la maniere en react de faire des variables utilisable dans le JSX (html)
    // a chaque changement de state, le code de la page est relue
    // trois techniques:
    // - affichage de la valeur directe
    // - modification d'une className
    // - affichage par condition

    const [square1, setSquare1] = useState('square bkg-orange');
    const [square2, setSquare2] = useState('square bkg-orange');
    const [square3, setSquare3] = useState('square bkg-orange');

    return (
        <div className="squares">
            <Statments />
            <div className="rows">
                {/* Switch de className */}
                {/* {setSquare3 ? 'square bkg-orange' : 'square bkg-green'} */}
                {/* affichage ou masquage */}
                {/* {setSquare3 ? <div className='square bkg-orange'></div> : <p>DIV masquée</p>} */}

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


