import "./modal.css";

export const Modal = (props) => {
  return (
    <div className="modal">
      <img src={props.character.image} title={props.character.name} />
      <div>Nom : {props.character.name}</div>
      <div>Patronus :{props.character.patronus}</div>
      <div>Maison :{props.character.house}</div>
    </div>
  );
};

