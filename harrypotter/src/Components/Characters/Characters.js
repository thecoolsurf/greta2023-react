import "./characters.css";
import Card from "../Card/Card.js";
import { useState } from "react";

export const Characters = (props) => {
  const total = props.datas.name;
  const incr = 200;
  const [index,setIndex] = useState(1);
  const [margX,setMargX] = useState(0);
  return (
    <section className="characters">
      <div className="category">{props.url}</div>
      <div className="prev" onClick={() => {
        setIndex(0);
        setIndex(index-1);
        setMargX(index*incr);
        console.log('prev',index, margX);

      }}>
        <i class="fa fa-chevron-circle-left" aria-hidden="true"></i>
      </div>
      <div className="next" onClick={() => {
        setIndex(0);
        setIndex(index+1);
        setMargX(-(index*incr));
        console.log('next',index,margX);
      }}>
        <i class="fa fa-chevron-circle-right" aria-hidden="true"></i>
      </div>
      <div className="wrapper" style={{marginLeft: margX + 'px'}}>
        {props.datas.map((character) => {
          return <Card character={character} />;
        })}
      </div>
    </section>
  );
};
