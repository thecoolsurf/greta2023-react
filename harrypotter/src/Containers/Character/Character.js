import './character.css';
import { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Header } from '../../Components/Header/Header.js';
import { Footer } from '../../Components/Footer/Footer.js';
import { Infos } from '../../Components/infos/Infos.js';

import gryffindor from '../../assets/images/gryffindor.png';
import hufflepuff from '../../assets/images/hufflepuff.png';
import ravenclaw from '../../assets/images/ravenclaw.png';
import slytherin from '../../assets/images/slytherin.png';

export const Character = () => {
    const [show, setShow] = useState('modal hide');
    const [datas, setDatas] = useState([]);
    const location = useLocation();
    const url = location.pathname.toLowerCase().split('/')[1];
    const params = useParams();
    let cat = '';
    function blason() {
        switch (cat) {
            case 'gryffindor': return gryffindor;
            case 'hufflepuff': return hufflepuff;
            case 'ravenclaw': return ravenclaw;
            case 'slytherin': return slytherin;
            default: return gryffindor;
        }
    }
    useEffect(() => {
        const fetchtheData = async () => {
            const response = await fetch(
                `https://hp-api.onrender.com/api/character/${params.id}`
            );
            const responseApi = await response.json();
            setDatas(responseApi);
        };
        fetchtheData();
    }, []);
    return (
        <div className={url}>
            <Header />
            {datas.map((item, i) => {
                cat = item.house.toLowerCase();
                let img = item.image ? item.image : blason(cat);
                return (
                    <section className="identity">
                        <modal className={show} onClick={() => setShow('modal hide')}>
                            <img src={img} title={item.name} />
                        </modal>
                        <div className="images">
                            <a className="return" href={'/' + item.house} target="_self">{'Return to ' + item.house}</a>
                            <div className="image">
                                <img src={img} title={item.name} onClick={() => {
                                    setShow('modal show');
                                }} />
                                <div className="legend">{item.name}</div>
                            </div>
                            <div className="blason">
                                <img src={blason(cat)} title={item.house} />
                            </div>
                        </div>
                        <Infos datas={item} />
                    </section>
                )
            })}
            <Footer />
        </div>
    )
}