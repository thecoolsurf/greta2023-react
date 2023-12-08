import './navigation.css';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Navigation = (props) => {
    const [slidedown,setSlidedown] = useState('slidedown show');
    const location = useLocation()
    let url = location.pathname.toLowerCase().replace('/', '');
    let width = window.innerWidth;
    return (
        <div className="nav">
            <div className="slider" onClick={()=>{
                slidedown == 'slidedown show' ? setSlidedown('slidedown hide') : setSlidedown('slidedown show');
            }}><i className="fa fa-bars"></i></div>
            <Link className="link nav-home" to="/" onClick={()=>{
                width < 650 ? setSlidedown('slidedown hide') : setSlidedown('slidedown show');
            }}><i className="fa fa-home"></i></Link>
            <div className={slidedown}>
                {props.menus.map((item, i) => {
                    const active = item.toLowerCase() === url ? 'link active' : 'link';
                    return (
                        <Link className={active} to={item}>{item}</Link>
                    )
                })}
            </div>
        </div>
    );
}
