import Widget from '../../Components/Widget/Widget.js';
import {DatasSection} from '../../Components/Datas/DatasSection.js';
import './section.css';

export const Section = () => {
    return (
        <section className="section">
            <Widget datas={DatasSection} />
        </section>
    )
}
