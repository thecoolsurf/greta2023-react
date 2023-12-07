import './header.css';
import logo_gryffindor from '../../assets/images/gryffindor.png';
import logo_hufflepuff from '../../assets/images/hufflepuff.png';
import logo_ravenclaw from '../../assets/images/ravenclaw.png';
import logo_slytherin from '../../assets/images/slytherin.png';

export const Header = () => {
    return (
        <header className="header">
            <div className="block">
                <h1>Harry Potter</h1>
                <h3>Your Favourite Harry Potter Characters in one Click.</h3>
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
        </header>
    )
}
