import React from "react";
import "./Order.css";

const order = props => {
  const ingredients = [];

  for (let ingredientName in props.ingredients) {
    ingredients.push({
      name: ingredientName,
      amount: props.ingredients[ingredientName]
    });
  }

  console.log(props.ingredients);
  const ingredientOutPut = ingredients.map(ig => {
    return (
      <span
        style={{
          textTransform: "capitalize",
          display: "inline-block",
          margin: "0 8px",
          border: "1px solid #ccc",
          padding: "5px"
        }}
        key={ig.name}
      >
        {ig.name} ({ig.amount})
      </span>
    );
  });

  console.log(ingredientOutPut);

  return (
    <div className='Order'>
      <p> Ingredients: {ingredientOutPut}</p>
      <p>
        <strong>Price:</strong> {props.price.toFixed(2)} &#8377;
      </p>
    </div>
  );
};

export default order;
