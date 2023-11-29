import './widget.css';
import { Pager } from '../Pager/Pager.js';

const Widget = (props) => {
    return (
        <div className="widget">
            <div className="heart"><i className="fa-light fa fa-heart"></i></div>
            <div className="gallery">
                <div className="wrapper">
                    {props.image.map((item) => {
                        return (
                            <div className="picture">
                                <img src={item} title={props.title} alt={props.title} />
                            </div>
                        )
                    })
                    }

                </div>
            </div>
            <div className="country">{props.city}, <span>{props.country}</span>.</div>
            <div className="pager">
                {props.image.map((item, i) => {
                    let tt = item.length;
                    return (
                        <Pager total={tt} />
                    )
                })}
            </div>
        </div>

    )
}
export default Widget;