import React from "react";
import "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Maeat", type: "meat" }
];

const buildControls = props => (
  <div className='BuildControls'>
    <p>
      {" "}
      Current Price: <strong>{props.price.toFixed(2)} &#8377;</strong>
    </p>
    {controls.map(ctrl => (
      <BuildControl
        type={ctrl.type}
        key={ctrl.label}
        label={ctrl.label}
        added={props.ingredientAdded.bind(this, ctrl.type)}
        removed={props.ingredientRemoved.bind(this, ctrl.type)}
        disabled={props.disabled.bind(ctrl.type)}
      />
    ))}

    {/* <button className='OrderButton' disabled={props.price === 4}>
      ORDER NOW{" "}
    </button> */}

    <button
      className='OrderButton'
      disabled={props.price === props.initial_price}
      onClick={props.ordered}
    >
      ORDER NOW{" "}
    </button>
  </div>
);

export default buildControls;
