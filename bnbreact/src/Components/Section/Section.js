import Widget from '../../Components/Widget/Widget.js';
import {DatasSection} from '../../Components/Datas/DatasSection.js';
import './section.css';

export const Section = () => {
    return (
        <section className="section">
            <Widget city={DatasSection.city} country={DatasSection.country} image={DatasSection.image} />
        </section>
    )
}
