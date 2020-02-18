import React from "react";
import "./BuildControl.css";

const buildControl = props => (
  // console.log(props.disabled(props.type)),
  <div className='BuildControl'>
    <div className='Label'>{props.label}</div>
    <button
      className=' Less'
      onClick={props.removed}
      disabled={props.disabled(props.type)}
    >
      Less
    </button>
    <button className='More' onClick={props.added}>
      More
    </button>
  </div>
);

export default buildControl;
