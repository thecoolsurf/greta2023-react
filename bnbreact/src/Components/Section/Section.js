import Widget from '../../Components/Widget/Widget.js';
import {DatasSection} from '../../Components/Datas/DatasSection.js';
import './section.css';

export const Section = () => {
    return (
        <section className="section">
            {DatasSection.map((item) =>{
                return (
                    <Widget country={item.country} city={item.city} image={item.image} />
                )
            })}
        </section>
    )
}
