import React from "react";
import "./Button.css";

let btnArray = ["Button"];
const button = props => (
  btnArray.push(props.btnType),
  (
    <button
      disabled={props.disabled}
      className={btnArray.join(" ")}
      onClick={props.clicked}
    >
      {[props.children]}
    </button>
  )
);

export default button;
