import "./characters.css";
import Card from "../Card/Card.js";
import { useState } from "react";

export const Characters = (props) => {
  const incr = 200;
  const [total,setTotal] = useState(0);
  const [showPrev, setShowPrev] = useState('prev hide');
  const [showNext, setShowNext] = useState('next show');
  const [index,setIndex] = useState(1);
  const [margX,setMargX] = useState(0);
  return (
    <section className="characters">
      <div className="category">{props.url}</div>
      <div className={showPrev} onClick={() => {
        setIndex(index);
        setMargX(index+incr);
        console.log('prev',index,margX,total);
      }}>
        <i class="fa fa-chevron-circle-left" aria-hidden="true"></i>
      </div>
      <div className={showNext} onClick={() => {
        if (index > 3) setShowPrev('prev show');
        setIndex(index+1);
        setMargX(-(index*incr));
        console.log('next',index,margX,total);
      }}>
        <i class="fa fa-chevron-circle-right" aria-hidden="true"></i>
      </div>
      <div className="wrapper" style={{marginLeft: margX + 'px'}}>
        {props.datas.map((character,i) => {
          return <Card id={i} character={character} />;
        })}
      </div>
    </section>
  );
};
