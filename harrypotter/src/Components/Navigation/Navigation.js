import './navigation.css';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const Navigation = () => {
    const location = useLocation()
    let url = location.pathname.toLowerCase().replace('/', '');
    return (
        <div className="nav">
            <Link className="link" to="/">Home</Link>
            <Link className="link" to="Gryffindor">Gryffindor</Link>
            <Link className="link" to="Hufflepuff">Hufflepuff</Link>
            <Link className="link" to="Ravenclaw">Ravenclaw</Link>
            <Link className="link" to="Slytherin">Slytherin</Link>
        </div>
    );
}
