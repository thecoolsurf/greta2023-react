import './character.css';
import { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Header } from '../../Components/Header/Header.js';
import { Footer } from '../../Components/Footer/Footer.js';

import gryffindor from '../../assets/images/gryffindor.png';
import hufflepuff from '../../assets/images/hufflepuff.png';
import ravenclaw from '../../assets/images/ravenclaw.png';
import slytherin from '../../assets/images/slytherin.png';

export const Character = () => {
    const [show,setShow] = useState('modal hide');
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
                console.log(cat)
                let img = item.image ? item.image : blason(cat);
                return (
                    <section className="identity">
                        <modal className={show} onClick={()=>setShow('modal hide')}>
                            <img src={img} title={item.name} />
                        </modal>
                        <div className="images">
                            <div className="blason">
                                <img src={blason(cat)} title={item.house} />
                                <a className="return" href={'/' + item.house} target="_self">{'Return to '+item.house}</a>
                            </div>
                            <div className="image">
                                <img src={img} title={item.name} onClick={()=>{
                                    setShow('modal show');
                                }} />
                                <div className="legend">{item.name}</div>
                            </div>
                        </div>
                        <div className="infos">
                            <div className="group">
                                <div className="legend">Name:</div>
                                <div className="info">{item.name}</div>
                                <div className="legend">Alternetes name:</div>
                                <div className="info">{item.alternate_names.map((el, i) => item.alternate_names[i])}</div>
                                <div className="legend">Wand core:</div>
                                <div className="info">{item.wand.core}</div>
                                <div className="legend">Wand length:</div>
                                <div className="info">{item.wand.length}</div>
                                <div className="legend">Wand wood:</div>
                                <div className="info">{item.wand.wood}</div>
                                <div className="legend">Patronus:</div>
                                <div className="info">{item.patronus}</div>
                                <div className="legend">Ancestry:</div>
                                <div className="info">{item.ancestry}</div>
                                <div className="legend">House:</div>
                                <div className="info">{item.house}</div>
                                <div className="legend">Species:</div>
                                <div className="info">{item.species}</div>
                            </div>
                            <div className="group">
                                <h2></h2>
                                <div className="legend">Date of birth:</div>
                                <div className="info">{item.dateOfBirth}</div>
                                <div className="legend">Gender:</div>
                                <div className="info">{item.gender}</div>
                                <div className="legend">Eye color:</div>
                                <div className="info">{item.eyeColour}</div>
                                <div className="legend">Hair color:</div>
                                <div className="info">{item.hairColour}</div>
                            </div>
                        </div>
                    </section>
                )
            })}
            <Footer />
        </div>
    )
}