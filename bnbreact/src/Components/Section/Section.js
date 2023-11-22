import { apartment } from '../Datas/Datas';
import Widget from '../../Components/Widget/Widget.js';
import './section.css';

import img1 from '../../assets/images/img1.webp';
import img2 from '../../assets/images/img2.webp';
import img3 from '../../assets/images/img3.webp';
import img4 from '../../assets/images/img4.webp';
import img5 from '../../assets/images/img5.webp';
import img6 from '../../assets/images/img6.webp';
import img7 from '../../assets/images/img7.webp';

export const Section = () => {
    return (
        <section className="section">

            <div className="widget">
                <div className="heart"><i className="fa-light fa fa-heart"></i></div>
                <div className="pager">
                    <span id="page1" className="page"></span>
                    <span id="page2" className="page"></span>
                    <span id="page3" className="page"></span>
                    <span id="page4" className="page"></span>
                    <span id="page5" className="page"></span>
                    <span id="page6" className="page"></span>
                </div>
                <div className="picture">
                    <img src={img1} title="img1" alt="img1" />
                </div>
                <div className="country">Stege, <span>Danemark</span>.</div>
            </div>
            <div className="widget">
                <div className="heart"><i className=" fa fa-heart"></i></div>
                <div className="picture">
                    <img src={img2} title="img1" alt="img1" />
                </div>
                <div className="country">Monta Delgada, <span>Portugal</span>.</div>
            </div>
            <div className="widget">
                <div className="heart"><i className=" fa fa-heart"></i></div>
                <div className="picture">
                    <img src={img3} title="img1" alt="img1" />
                </div>
                <div className="country">Drimnin, <span>Royaumme-Uni</span>.</div>
            </div>
            <div className="widget">
                <div className="heart"><i className=" fa fa-heart"></i></div>
                <div className="picture">
                    <img src={img4} title="img1" alt="img1" />
                </div>
                <div className="country">Amsterdam, <span>Pays-Bas</span>.</div>
            </div>
            <div className="widget">
                <div className="heart"><i className=" fa fa-heart"></i></div>
                <div className="picture">
                    <img src={img5} title="img1" alt="img1" />
                </div>
                <div className="country">Haute-Savoie, <strong>France</strong>.</div>
            </div>
            <div className="widget">
                <div className="heart"><i className=" fa fa-heart"></i></div>
                <div className="picture">
                    <img src={img6} title="img1" alt="img1" />
                </div>
                <div className="country">Haute-Savoie, <strong>France</strong>.</div>
            </div>
            <div className="widget">
                <div className="heart"><i className=" fa fa-heart"></i></div>
                <div className="picture">
                    <img src={img7} title="img1" alt="img1" />
                </div>
                <div className="country">Haute-Savoie, <strong>France</strong>.</div>
            </div>

        </section>
    )
}
