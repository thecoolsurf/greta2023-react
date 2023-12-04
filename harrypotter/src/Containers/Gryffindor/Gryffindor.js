import './gryffindor.css';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from '../../Components/Header/Header.js';
import { Footer } from '../../Components/Footer/Footer.js';
// import { Datas } from '../../Components/Characters/Datas.js';
import { Characters } from '../../Components/Characters/Characters.js';

export const Gryffindor = () => {
    const [datas, setDatas] = useState([]);
    const [search, setSearch] = useState("");
    const location = useLocation();
    let url = location.pathname.toLowerCase().replace('/', '');
    useEffect(() => {
        const fetchtheData = async () => {
            const response = await fetch(
                `https://hp-api.onrender.com/api/characters/house/${url}`
            );
            const responseApi = await response.json();
            setDatas(responseApi);
        };
        fetchtheData();
    }, []);
    return (
        <div className={url}>
            <Header />
            <input className="myinput" type="text" value={search} onChange={(e) => { setSearch(e.target.value); }} />
            <Characters datas={datas} />
            <section className="texte">
                <h2>Blason de Gryffondor</h2>
                <p>Gryffondor (Gryffindor en anglais) vivait dans le village de Godric's Hollow, dans les plaines12,
                    et était le plus grand duelliste de son temps5. L'emblème des Gryffondor est le lion,
                    considéré comme la plus courageuse de toutes les créatures13.</p>
            </section>
            <Footer />
        </div>
    )
}