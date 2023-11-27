import './navigation.css';
import { Link } from 'react-router-dom';

export const Navigation = () => {
    return (
        <div className="nav">
            <Link to="/">Home</Link>
            <Link to="Counters">Counters</Link>
            <Link to="Circles">Circles</Link>
            <Link to="Squares">Squares</Link>
            <Link to="Next">Next</Link>
            <Link to="FastGoodCheap">FastGoodCheap</Link>
        </div>
    );
}