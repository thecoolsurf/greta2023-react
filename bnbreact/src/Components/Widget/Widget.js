import './widget.css';
import img1 from '../../assets/images/img1.webp';

export const Widget = () => {
    return (
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
    )
}
