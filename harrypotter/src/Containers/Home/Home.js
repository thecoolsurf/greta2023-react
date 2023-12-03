import './home.css';
import { useLocation } from 'react-router-dom';
import { Navigation } from '../../Components/Navigation/Navigation.js';
import { Header } from '../../Components/Header/Header.js';
import { Footer } from '../../Components/Footer/Footer.js';

export const Home = () => {
    const location = useLocation()
    let url = 'Home';
    return (
        <div className="home">
            <Navigation />
            <Header url={url} />
            <div className="texte">
                Home
            </div>
            <Footer />
        </div>
    )
}
