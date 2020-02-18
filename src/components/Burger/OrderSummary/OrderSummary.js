import React from "react";
import Auxilliary from "../../../Hoc/Auxilliary";
import Button from "../../UI/Button/Button";

const orderSummary = props => {
  const ingredientsSummary = Object.keys(props.ingredients).map(igKey => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:
        {props.ingredients[igKey]}
      </li>
    );
  });

  return (
    <Auxilliary>
      <h3> Your Order</h3>
      <p>Delicious burger with following ingredients</p>
      <ul>{ingredientsSummary}</ul>
      <p>
        <strong>Total Price : {props.price.toFixed(2)} &#8377;</strong>
      </p>
      <p>Continue to CheckOut?</p>
      <Button btnType={"Danger"} clicked={props.purchaseCancel}>
        CANCEL
      </Button>
      <Button btnType={"Success"} clicked={props.purchaseContinue}>
        CONTINUE
      </Button>
    </Auxilliary>
  );
};

export default orderSummary;
