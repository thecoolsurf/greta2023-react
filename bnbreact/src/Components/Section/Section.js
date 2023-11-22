import Widget from '../../Components/Widget/Widget.js';
import {Datas} from '../../Components/Datas/Datas.js';
import './section.css';

export const Section = () => {
    console.log(Datas);
    return (
        <section className="section">
            <Widget city={Datas.city} country={Datas.country} img={Datas.img} />
            <Widget city={Datas.city} country={Datas.country} img={Datas.img} />
            <Widget city={Datas.city} country={Datas.country} img={Datas.img} />
        </section>
    )
}
