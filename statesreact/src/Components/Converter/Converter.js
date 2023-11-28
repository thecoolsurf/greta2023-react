import './converter.css';
import { useState } from 'react';
import { Parities } from '../Datas/DatasParities.js';
import { Selector } from './Selector.js';

export const Converter = () => {

    console.log(Parities);

    const [val1, setVal1] = useState('');
    const [res1, setRes1] = useState(0);
    const [val2, setVal2] = useState('');
    const [res2, setRes2] = useState(0);

    const parityEUROtoUSD = 1.10;
    const parityUSDtoEURO = 0.91;

    return (
        <div className="converter">

            <div className="rows">
                <h1>Converter #1</h1>
                {/* Convert euro to usd */}
                <div className="row">
                    <div className="title">Conversion de EUROS</div>
                    <input type="text" value={val1} onChange={(e) => {
                        let val = e.target.value;
                        let conv = (val * parityEUROtoUSD).toFixed(2);
                        setVal1(val);
                        setRes1(conv);
                    }
                    } />
                </div>

                <div className="row">
                    <div className="title">vers USD</div>
                    <input type="text" value={res1} />
                </div>
            </div>

            {/* Convert euro to usd and usd to euro */}
            <div className="rows">
                <h1>Converter #2</h1>
                <div className="row">
                    <div className="title">Conversion de EUROS</div>
                    <input type="text" value={val2} onChange={(e) => {
                        let val = e.target.value;
                        setVal2(val);
                        setRes2(val * parityEUROtoUSD);
                    }
                    } />
                </div>
                <div className="row">
                    <div className="title">vers USD</div>
                    <input type="text" value={res2} onChange={(e) => {
                        let val = e.target.value;
                        setVal2(val * parityUSDtoEURO);
                        setRes2(val);
                    }} />
                </div>
            </div>

            {/* Convert with choosen parities */}
            <div className="rows">
                <h1>Converter #3</h1>
                <div className="row">
                    <div className="title">
                        <select className="selector">
                            <Selector country={Parities.country} rate={Parities.rate} />
                        </select>
                    </div>
                    <input type="text" value={res1} />
                </div>
                <div className="row">
                    <div className="title">
                    </div>
                    <input type="text" value={val2} onChange={(e) => {
                        let val = e.target.value;
                        setVal2(val);
                        setRes2(val * parityEUROtoUSD);
                    }
                    } />
                </div>
            </div>

        </div>
    )
}