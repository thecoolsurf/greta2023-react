import './javascript.css';
import { useState } from 'react';

export const Javascript = () => {

    let array1 = [1,2,3];
    let array2 = array1;
    let array3 = [...array1];
    
    array2[0] = 100;
    array3[0] = 200;
    
    console.log('array1', array1);
    console.log('array2', array2);
    console.log('array3', array3);

    // convert to json
    // JSON.stringify(array1);
    // console.log('JSON array1',array1);

    // convert to array
    // JSON.parse(array1);
    // console.log('PARSE array1',array1);

    const [myState, setMyState] = useState([1,2,3]);

    return (
        <div className="javascript">
            <h1>Javascript</h1>
            <h2>Révision des copies de tableaux et objets</h2>
            <div className="row">
                <ul>
                {myState.map((item) => {
                    return (
                        <li>{item}</li>
                    )
                })}
                </ul>
                <button onClick = {() => {
                    // ne fait pas de copie mais une instance de l'objet de base
                    // array5 = myState;
                    // pour faire une copie du tableau
                    let i=0;
                    const array5 = JSON.parse(JSON.stringify(myState));
                    array5.push('toto'+(i++));
                    setMyState(array5);
                    console.log(array5);
                }}>ClickMe</button>
            </div>
        </div>
    )
}