import './navigation.css';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const Navigation = () => {
    const location = useLocation()
    let url = location.pathname.toLowerCase().replace('/', '');
    return (
        <div className="nav">
            <Link to="/">Home</Link>
            <Link to="Gryffindor">Gryffindor</Link>
            <Link to="Hufflepuff">Hufflepuff</Link>
            <Link to="Ravenclaw">Ravenclaw</Link>
            <Link to="Slytherin">Slytherin</Link>
        </div>
    );
}
