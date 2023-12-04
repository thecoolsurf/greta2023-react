import { useState } from "react";
import "./card.css";
import { Modal } from '../Modal/Modal.js';

const Card = (props) => {
  const [show, setShow] = useState(false);
  return (
    <div className="card" onClick={() => {
      console.log('click');
      return <Modal datas={props.character} />
    }}>
      <img src={props.character.image} />
      <span className="legend"> {props.character.name} </span>
    </div>
  );
};

export default Card;