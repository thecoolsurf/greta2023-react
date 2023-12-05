import "./card.css";
import { useLocation } from 'react-router-dom';

import gryffindor from '../../assets/images/gryffindor.png';
import hufflepuff from '../../assets/images/hufflepuff.png';
import ravenclaw from '../../assets/images/ravenclaw.png';
import slytherin from '../../assets/images/slytherin.png';
import defaut from '../../assets/images/gryffindor.png';

const Card = (props) => {
  const location = useLocation();
  let url = location.pathname.toLowerCase().replace('/', '');
  function blason() {
    switch (url) {
      case 'gryffindor': return gryffindor;
      case 'hufflepuff': return hufflepuff;
      case 'ravenclaw': return ravenclaw;
      case 'slytherin': return slytherin;
      default: return defaut;
    }
  }
  let img = props.character.image ? props.character.image : blason();
  return (
    <a className="card" href={'Character/'+props.character.id}>
      <img src={img} title={props.character.name} />
      <span className="legend">{props.character.name}</span>
    </a>
  );
};

export default Card;