import { Pager } from '../../Components/Pager/Pager.js';
import './widget.css';

const Widget = (props) => {
    console.log(props);
    return (
        <div className="widget">
            <div className="heart"><i className="fa-light fa fa-heart"></i></div>
            <div className="picture">
                <img src="" title="" alt="" />
            </div>
            <div className="country">{props.city}, <span>{props.country}</span>.</div>
            <div className="pager">
                <Pager />
            </div>
        </div>

    )
}
export default Widget;