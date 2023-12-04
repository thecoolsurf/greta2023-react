import { useState } from "react";
// import "./Movers.css";
export const Movers = () => {
  const [posX, setposX] = useState(0);
  const [posY, setposY] = useState(0);
  return (
    <div className="moverscontainer">
      <button
        onClick={() => {
          setposX(posX + 20);
        }}
      >
        
        {"<"}
      </button>
      <button
        onClick={() => {
          setposX(posX - 20);
        }}
      >
        {">"}
      </button>
      <button
        onClick={() => {
          setposY(posY + 20);
        }}
      >
        {"Down"}
      </button>
      <button
        onClick={() => {
          setposY(posY - 20);
        }}
      >
        {"Up"}
      </button>
      <div className="movers" style={{ right: posX, top: posY }}>
        toto
      </div>
    </div>
  );
};
