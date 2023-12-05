import './home.css';
import { useLocation } from 'react-router-dom';
import { Header } from '../../Components/Header/Header.js';
import { Footer } from '../../Components/Footer/Footer.js';

export const Home = () => {
    const location = useLocation()
    let url = 'Home';
    return (
        <div className="home">
            <Header url={url} />
            <Footer />
        </div>
    )
}
