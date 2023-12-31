import logo from '../../assets/images/logo.png';
import {title,baseline} from '../../Components/Datas/DatasHeader.js';
import { Navigation } from '../../Components/Navigation/Navigation.js';
import './header.css';

export const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src={logo} title={title} />
            </div>
            <Navigation />
            <div className="baseline"><a href="/">{baseline}</a></div>
        </header>
    )
}