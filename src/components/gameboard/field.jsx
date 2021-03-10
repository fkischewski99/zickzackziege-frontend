import React from "react";

// Erweiterungen mit Tick Tack Toe etc
const Field = (props) => {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
};

export default Field;
