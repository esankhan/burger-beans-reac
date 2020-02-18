import React from "react";
import BurgerIngredient from "./BurgerIngredients/BurgerIngredients";
import "./Burger.css";

const burger = props => {
  const ingredientsName = Object.keys(props.ingredients);
  const ingredientCount = Object.values(props.ingredients);
  let transformedIngredientsTwo = [];
  for (let i = 0; i < ingredientsName.length; i++) {
    for (let j = 0; j < ingredientCount[i]; j++) {
      //const vali = ingredientsName[i];
      transformedIngredientsTwo.push(
        <BurgerIngredient
          key={ingredientsName[i] + i + j}
          type={ingredientsName[i]}
        />
      );
    }
  }
  if (transformedIngredientsTwo.length === 0) {
    transformedIngredientsTwo.push(
      <p key='ingrNo'>Please Starting adding Values</p>
    );
  }

  console.log(transformedIngredientsTwo);

  return (
    <div className='Burger'>
      <BurgerIngredient type='bread-top' />
      {transformedIngredientsTwo}
      <BurgerIngredient type='bread-bottom' />
    </div>
  );
};

export default burger;
