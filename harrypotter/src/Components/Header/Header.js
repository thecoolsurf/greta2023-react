import './header.css';
import bkg_potter from '../../assets/images/harry-potter-v2.webp';
import logo_gryffindor from '../../assets/images/blasons-01.png';
import logo_hufflepuff from '../../assets/images/blasons-02.png';
import logo_ravenclaw from '../../assets/images/blasons-03.png';
import logo_slytherin from '../../assets/images/blasons-04.png';

import { header_title, header_baseline } from './Datas.js';

export const Header = (props) => {
    let url = props.url;
    let classHeader = url+' header';
    console.log(classHeader);
    return (
        <header className="header">
            <img src={bkg_potter} title="Harry Potter" />
            <div className="title">
                <div className="block">
                    <h1>{header_title}</h1>
                    <h3>{header_baseline}</h3>
                </div>
                <div className="block">
                    <a className="logo" href='/Gryffindor'>
                        <img src={logo_gryffindor} title="Gryffindor" />
                    </a>
                    <a className="logo" href='/Hufflepuff'>
                        <img src={logo_hufflepuff} title="Hufflepuff" />
                    </a>
                    <a className="logo" href='/Ravenclaw'>
                        <img src={logo_ravenclaw} title="Ravenclaw" />
                    </a>
                    <a className="logo" href='/Slytherin'>
                        <img src={logo_slytherin} title="Slytherin" />
                    </a>
                </div>
            </div>
        </header>
    )
}
