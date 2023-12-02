import './header.css';
import logo_gryffindor from '../../assets/Gryffindor.jpg';
import logo_hufflepuff from '../../assets/Hufflepuff.jpg';
import logo_ravenclaw from '../../assets/Ravenclaw.jpg';
import logo_slytherin from '../../assets/Slytherin.jpg';
import { Navigation } from '../Navigation/Navigation.js';

export const Header = () => {
    return (
        <header className="header">
            <Navigation />
            <div className="logos">
                <div className="logo">
                    <a href='/Gryffindor'>
                        <img src={logo_gryffindor} title="Gryffindor" />
                    </a>
                </div>
                <div className="logo">
                    <a href='/Hufflepuff'>
                        <img src={logo_hufflepuff} title="Hufflepuff" />
                    </a>
                </div>
            </div>
            <div className="logos">
                <div className="logo">
                    <a href='/Ravenclaw'>
                        <img src={logo_ravenclaw} title="Ravenclaw" />
                    </a>
                </div>
                <div className="logo">
                    <a href='/Slytherin'>
                        <img src={logo_slytherin} title="Slytherin" />
                    </a>
                </div>
            </div>
        </header>
    )
}
