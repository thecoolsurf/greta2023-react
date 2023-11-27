import './next.css';
import { useState } from 'react';
import { Statments } from './Statments.js';

// export const Next = () => {

//     const [picture, setPicture] = useState('picture dog1');

//     return (
//         <div className="nexts">
//             <Statments />
//             <div className="rows">
//                 <div className={picture}></div>
//                 <button onClick={() => {
//                     if (picture === 'picture dog1') {
//                         setPicture('picture dog2');
//                     } else if (picture === 'picture dog2') { 
//                         setPicture('picture dog3');
//                     } else {
//                         setPicture('picture dog1')
//                     }
//                 }
//                 }>Next</button>
//             </div>
//         </div>
//     );
// }

/* ************************************************************************ */
/* correction */

export const Next = () => {

    const [index, setIndex] = useState(0);
    const classes = ['picture dog1','picture dog2','picture dog3'];

    return (
        <div className="nexts">
            <Statments />
            <div className="rows">
                <div className={classes[index]}></div>
                <button type="button" onClick={() => {
                    console.log(index);
                    if (index === 2) {
                        setIndex(0);
                    } else {
                        setIndex(index+1);
                    }
                    }
                }>Next</button>
            </div>
        </div>
    )
}