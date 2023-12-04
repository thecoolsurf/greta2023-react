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
            <Link to="Configurator">Configurator</Link>
            <Link to="Converter">Converter</Link>
            <Link to="Javascript">Javascript</Link>
            <Link to="Modale">Modale</Link>
            <Link to="Movers">Movers</Link>
            <Link to="ToDoList">ToDoList</Link>
        </div>
    );
}