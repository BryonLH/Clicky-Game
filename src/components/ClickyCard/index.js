import React from "react";
import "./style.css";

function ClickyCard(props) {
  return (
    <div className="clicky-card">
      <img src={props.image} alt={props.name} value={props.id} onClick={() => props.handleClick(props.id)} className="img-thumbnail"></img>
    </div>
  );
};

export default ClickyCard;
