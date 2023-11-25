import './circles.css';
import { useState } from 'react';
import { Statments } from './Statments';

export const Circles = () => {

    // on recupere une variable et la facon de la changer
    const [circle1, setcircle1] = useState('circle bkg-orange');
    const [circle2, setcircle2] = useState('circle bkg-orange');
    const [circle3, setcircle3] = useState('circle bkg-orange');

    const [dog1, setDog1] = useState('circle bkg-dog1');
    const [dog2, setDog2] = useState('circle bkg-dog2');
    const [dog3, setDog3] = useState('circle bkg-dog3');

    const [display1, setDisplay1] = useState('legend hidden');
    const [display2, setDisplay2] = useState('legend hidden');
    const [display3, setDisplay3] = useState('legend hidden');

    return (
        <div className="circles">
            <Statments />
            <div className="rows">
                <div className="row">
                    <div className={circle1} onClick={() => {
                        if (circle1 === 'circle bkg-orange') {
                            setcircle1('circle bkg-dog1');
                            setDisplay1('legend display');
                        } else {
                            setcircle1('circle bkg-orange');
                            setDisplay1('legend hidden');
                        }
                    }
                    }></div>
                    <div className={display1}>PERDU</div>
                </div>
                <div className="row">
                    <div className={circle2} onClick={() => {
                        if (circle2 === 'circle bkg-orange') {
                            setcircle2('circle bkg-lion');
                            setDisplay2('legend display');
                        } else {
                            setcircle2('circle bkg-orange');
                            setDisplay2('legend hidden');
                        }
                    }
                    }></div>
                    <div className={display2}>GAGNE</div>
                </div>
                <div className="row">
                    <div className={circle3} onClick={() => {
                        if (circle3 === 'circle bkg-orange') {
                            setcircle3('circle bkg-dog2');
                            setDisplay3('legend display');
                        } else {
                            setcircle3('circle bkg-orange');
                            setDisplay3('legend hidden');
                        }
                    }
                    }></div>
                    <div className={display3}>PERDU</div>
                </div>
            </div>
        </div>
    );
}


