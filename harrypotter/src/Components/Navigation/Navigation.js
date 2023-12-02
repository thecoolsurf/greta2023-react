import './navigation.css';
import { Link } from 'react-router-dom';

export const Navigation = () => {
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
