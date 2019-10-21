import React from "react";
import "./style.css";

function ClickyCard(props) {
  return (
    <button className="clicky-card">
      <img src={props.image} alt={props.name} value={props.id} onClick={() => props.handleClick(props.name)} className="img-thumbnail"></img>
    </button>
  );
};

export default ClickyCard;
