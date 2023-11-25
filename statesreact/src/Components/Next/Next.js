import './next.css';
import { useState } from 'react';
import { Statments } from './Statments.js';

export const Next = () => {

    const [picture, setPicture] = useState('picture dog1');

    return (
        <div className="nexts">
            <Statments />
            <div className="rows">
                <div className={picture}></div>
                <button onClick={() => {
                    if (picture === 'picture dog1') {
                        setPicture('picture dog2');
                    } else if (picture === 'picture dog2') { 
                        setPicture('picture dog3');
                    } else {
                        setPicture('picture dog1')
                    }
                }
                }>Next</button>
            </div>
        </div>
    );
}


