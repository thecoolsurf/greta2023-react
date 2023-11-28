// import {logo} from '../../assets/images/logo.png';
import {title,baseline} from '../../Components/Datas/DatasHeader.js';
import './header.css';

export const Header = () => {
    return (
        <header className="header">
            <div className="logo" id="logo">
                <img src="" title={title} />
            </div>
            <div className="search">
                <input id="search" type="text" className="search" max="100" placeholder="Search something" />
                <div className="picto"><i className="fa-solid fa-magnifying-glass"></i></div>
            </div>
            <div className="baseline"><a href="/">{baseline}</a></div>
        </header>
    )
}