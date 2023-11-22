import { Datas } from '../Datas/Datas';
import Widget from '../../Components/Widget/Widget.js';
import './section.css';

export const Section = () => {
    return (
        <section className="section">
            <Widget datas={Datas} />
        </section>
    )
}
