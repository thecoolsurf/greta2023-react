import './houses.css';
import { useState, useEffect } from 'react';
import { Characters } from '../../Components/Characters/Characters.js';

export const Houses = (props) => {
    const [datas, setDatas] = useState([]);
    useEffect(() => {
        const fetchtheData = async () => {
            const response = await fetch(
                `https://hp-api.onrender.com/api/characters/house/${props.url}`
            );
            const responseApi = await response.json();
            setDatas(responseApi);
        };
        fetchtheData();
    }, []);
    return (
        <div className="houses">
            <Characters datas={datas} total={datas.length} />
            <section className="texte">
                <h2>Blason de {props.url}</h2>
                <p>Gryffondor (Gryffindor en anglais) vivait dans le village de Godric's Hollow, dans les plaines12,
                    et était le plus grand duelliste de son temps5. L'emblème des Gryffondor est le lion,
                    considéré comme la plus courageuse de toutes les créatures13.</p>
            </section>
        </div>
    )
}