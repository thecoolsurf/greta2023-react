import './configurator.css';
import { useState } from 'react';

export const Configurator = () => {
    const [img, setImg] = useState('thumbnail choose');
    const [bkg1, setBkg1] = useState('selector gray');
    const [bkg2, setBkg2] = useState('selector gray');
    const [bkg3, setBkg3] = useState('selector gray');
    const [bkg4, setBkg4] = useState('selector gray');
    const [title, setTitle] = useState('Choissisez votre modèle');
    const [velo, setVelo] = useState(500);
    const [vtt, setVtt] = useState(700);
    const [total, setTotal] = useState(0);
    return (
        <div className="configurator">
            <div className={img}></div>
            <h2 className="title">CONFIGURATEUR</h2>
            <div className="modele">{title}</div>
            <div className="row">
            </div>
            <div className="row">
                <div className={bkg1} onClick={()=>{
                    setTitle('Vélo de ville');
                    setImg('thumbnail velo');
                    setBkg2('selector gray');
                    if (bkg1 === 'selector gray') {
                        setBkg1('selector green');
                        setBkg3('selector gray');
                        setBkg4('selector gray');
                        setTotal(500);
                    } else {
                        setBkg1('selector gray');
                        setTotal(0);
                    }
                }}>Vélo de ville</div>
                <div className="price"><span>500.00</span> Euros</div>
                <div className={bkg2} onClick={()=>{
                    setTitle('VTT');
                    setImg('thumbnail vtt');
                    setBkg1('selector gray');
                    if (bkg2 === 'selector gray') {
                        setBkg2('selector green');
                        setBkg3('selector gray');
                        setBkg4('selector gray');
                        setTotal(700);
                    } else {
                        setBkg2('selector gray');
                        setTotal(0);
                    }
                    setTotal(700);
                }}>Mountain Bike</div>
                <div className="price"><span>700.00</span> Euros</div>
            </div>
            <div className="row">
                <div className="chooser">Choisissez votre selle</div>
           </div>
            <div className="row">
                <div className={bkg3} onClick={()=>{
                    if (bkg1 === 'selector green' && bkg3 === 'selector gray') {
                        setBkg3('selector green');
                        setTotal(500+20);
                    } else if (bkg2 === 'selector green' && bkg3 === 'selector gray') {
                        setBkg3('selector green');
                        setTotal(700+20);
                    } else {
                        setTotal(0);
                        setBkg3('selector gray');
                    }
                    setBkg4('selector gray');
                }}>Classique</div>
                <div className="price"><span>20.00</span> Euros</div>
                <div className={bkg4} onClick={()=>{
                    if (bkg1 === 'selector green' && bkg4 === 'selector gray') {
                        setBkg3('selector green');
                        setTotal(500+80);
                    } else if (bkg2 === 'selector green' && bkg4 === 'selector gray') {
                        setBkg3('selector green');
                        setTotal(700+80);
                    } else {
                        setTotal(0);
                        setBkg3('selector gray');
                    }
                    setBkg4('selector gray');
                }}>Avec suspensions</div>
                <div className="price"><span>80.00</span> Euros</div>
            </div>
            <div className="row">
                <div className="title">PRIX FINAL</div>
                <div className="price"><span>{total}</span> Euros</div>
            </div>
        </div>
    )
}