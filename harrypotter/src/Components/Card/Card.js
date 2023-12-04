import "./card.css";
import { useLocation } from 'react-router-dom';
import { Modal } from '../Modal/Modal.js';
import blason from '../../assets/images/gryffindor.png';

const Card = (props) => {
  const location = useLocation();
  let url = location.pathname.toLowerCase().replace('/', '');
  // let img = props.character.image ? props.character.image : '../../assets/images/'+url+'.png';
  let img = props.character.image ? props.character.image : blason;
  return (
    <div className="card" onClick={() => {
      console.log('click');
      return <Modal datas={props.character} />
    }}>
      <img src={img} title={props.character.name} />
      <span className="legend">{props.character.name}</span>
    </div>
  );
};

export default Card;