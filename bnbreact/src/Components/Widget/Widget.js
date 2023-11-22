import {Pager} from '../../Components/Pager/Pager.js';
import './widget.css';
import img1 from '../../assets/images/img1.webp';
import img2 from '../../assets/images/img2.webp';
import img3 from '../../assets/images/img3.webp';
import img4 from '../../assets/images/img4.webp';
import img5 from '../../assets/images/img5.webp';
import img6 from '../../assets/images/img6.webp';
import img7 from '../../assets/images/img7.webp';



const pathToImg = '../../assets/images/';

const Widget = (props) => {
    let datas = props.datas;
    return (
        <div className="widget">
            <div className="heart"><i className="fa-light fa fa-heart"></i></div>
            <div className="picture">
                <img src={datas.img} title={datas.img} alt={datas.img} />
            </div>
            <div className="country">Stege, <span>Danemark</span>.</div>
        </div>

    )
}
export default Widget;