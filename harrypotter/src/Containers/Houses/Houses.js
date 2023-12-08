import './houses.css';
import { useState, useEffect } from 'react';
import { Characters } from '../../Components/Characters/Characters.js';

export const Houses = (props) => {
    const [datas, setDatas] = useState([]);
    const [search, setSearch] = useState([]);
    const [filterDatas, setFilterDatas] = useState('');
    /* resultat de l'API Harry Potter après filtrage serveur 'HOUSE' => 'Name' */
    useEffect(() => {
        const fetchSearchData = async () => {
            const response = await fetch(
                `https://hp-api.onrender.com/api/characters/house/${props.url}`
            );
            const result = await response.json();
            setDatas(result);
        };
        fetchSearchData();
    }, []);
    /* flitre local depuis le tableau retourné par l'API Harry Potter */
    useEffect(() => {
        if (datas) {
            const searchResult = datas.filter((el) => {
                return el.name.includes(search);
            });
            setFilterDatas(searchResult);
        } else { setFilterDatas('') }
    }, [search]);
    return (
        <div className="houses">
            <div className="search">
                <div className="house">{props.url}</div>
                <div className="searchbox">
                    <input type="text" max="50" value={search} onChange={(e) => { setSearch(e.target.value) }} />
                    <i className="fa fa-search"></i>
                </div>
            </div>
            <Characters datas={filterDatas || datas} total={datas.length} />
            <section className="texte">
                <h2>Blason de {props.url}</h2>
                <p>Gryffondor (Gryffindor en anglais) vivait dans le village de Godric's Hollow, dans les plaines12,
                    et était le plus grand duelliste de son temps5. L'emblème des Gryffondor est le lion,
                    considéré comme la plus courageuse de toutes les créatures13.</p>
            </section>
        </div>
    )
}