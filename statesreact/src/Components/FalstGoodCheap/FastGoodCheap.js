import './fastgoodcheap.css';
import { useState } from 'react';

export const FastGoodCheap = () => {

    const [fast, setFast] = useState(0);
    const [good, setGood] = useState(0);
    const [cheap, setCheap] = useState(0);

    const [total, setTotal] = useState(0);

    const checkRed = ['red:before','red:after'];
    const checkGreen = ['green:before','green:after'];
    const checkBlue = ['blue:before','blue:after'];

    return (
        <div className="fastgoodcheap">
            <div className="row">
                <input type="checkbox" id="fast" onClick={() => {
                        setFast(1);
                        setTotal(fast+good+cheap);
                        if (total > 3) {

                        }
                    }
                } />
                <label className="red" for="fast">FAST</label>
            </div>
            <div className="row">
                <input type="checkbox" id="good" onClick={() => {
                        setGood(1);
                    }
                } />
                <label className="green" for="good">GOOD</label>
            </div>
            <div className="row">
                <input type="checkbox" id="cheap" onClick={() => {
                        setCheap(1);
                    }
                } />
                <label className="blue" for="cheap">CHEAP</label>
            </div>
        </div>
    );
}