import './fastgoodcheap.css';
import { useState } from 'react';

export const FastGoodCheap = () => {

    const [fast, setFast] = useState(0);
    const [good, setGood] = useState(0);
    const [cheap, setCheap] = useState(0);

    const [total, setTotal] = useState(0);

    return (
        <div className="fastgoodcheap">
            <div className="row">
                <input type="checkbox" id="fast" onClick={() => {
                        setFast(1);
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