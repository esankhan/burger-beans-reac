import React, { useState } from "react";
import Auxilliary from "../../Hoc/Auxilliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axios from "../../axios-order";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../Hoc/withErrorHandler/witherrorHandler";

const INGREDIENT_PRICE = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

const INITIAL_PRICE = 4;

function BurgerBuilder(props) {
  const [ingredientsState, setIngredientState] = useState({
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: INITIAL_PRICE,
    purchasing: false,
    loading: false
  });

  const addIngredientHandler = type => {
    // console.log(type);
    const oldCount = ingredientsState.ingredients[type];
    const updateCounted = oldCount + 1;
    const updatedIngredients = { ...ingredientsState.ingredients };
    updatedIngredients[type] = updateCounted;
    const priceAddition = INGREDIENT_PRICE[type];
    const oldPrice = ingredientsState.totalPrice;
    const newPrice = oldPrice + priceAddition;

    // axios
    //   .get("https://burger-beans.firebaseio.com/ingredients.json", {
    //     headers: { Authorization: "Access-Control-Allow-Origin" }
    //   })
    //   .then(response => console.log(response));
    setIngredientState({
      ingredients: updatedIngredients,
      totalPrice: newPrice,
      purchasing: ingredientsState.ingredients.purchasing,
      loading: ingredientsState.ingredients.loading
    });
  };

  const removeIngredientHandler = type => {
    const oldCount = ingredientsState.ingredients[type];
    const updateCounted = oldCount - 1;
    const updatedIngredients = { ...ingredientsState.ingredients };
    updatedIngredients[type] = updateCounted;
    const priceDeduction = INGREDIENT_PRICE[type];
    const oldPrice = ingredientsState.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    setIngredientState({
      ingredients: updatedIngredients,
      totalPrice: newPrice,
      purchasing: ingredientsState.ingredients.purchasing,
      loading: ingredientsState.ingredients.loading
    });
  };
  const disabledInfo = {
    ...ingredientsState.ingredients
  };

  const disabledInfoHandler = type => {
    if (ingredientsState.ingredients[type] === 0) {
      return true;
    }
    return false;
  };
  //console.log(disabledInfoHandler("salad"));
  // console.log(disabledInfo("salad"));

  for (let key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key] === 0;
  }

  const purchaseHandler = () => {
    setIngredientState({
      ingredients: ingredientsState.ingredients,
      totalPrice: ingredientsState.totalPrice,
      purchasing: true,
      loading: ingredientsState.ingredients.loading
    });
  };

  const purchaseCancelHandler = () => {
    setIngredientState({
      ingredients: ingredientsState.ingredients,
      totalPrice: ingredientsState.totalPrice,
      purchasing: false,
      loading: ingredientsState.ingredients.loading
    });
  };

  const purchaseContinueHandler = () => {
    // // alert("You Continue");
    // setIngredientState({
    //   ingredients: ingredientsState.ingredients,
    //   totalPrice: ingredientsState.totalPrice,
    //   purchasing: false,
    //   loading: true
    // });
    // const order = {
    //   ingredients: ingredientsState.ingredients,
    //   price: ingredientsState.totalPrice,
    //   customer: {
    //     name: "Alex",
    //     address: {
    //       street: "7th street",
    //       zipCode: "987654",
    //       country: "india"
    //     },
    //     email: "test@test.com"
    //   },
    //   deliveryMethod: "fastest"
    // };
    // axios
    //   .post("/orders.json", order)
    //   .then(response => {
    //     setIngredientState({
    //       ingredients: ingredientsState.ingredients,
    //       totalPrice: ingredientsState.totalPrice,
    //       purchasing: false,
    //       loading: false
    //     });
    //   })
    //   .catch(error => {
    //     setIngredientState({
    //       ingredients: ingredientsState.ingredients,
    //       totalPrice: ingredientsState.totalPrice,
    //       purchasing: false,
    //       loading: false
    //     });
    //   }); //for firebase its .json
    const queryParams = [];
    for (let i in ingredientsState.ingredients) {
      queryParams.push(
        encodeURIComponent(i) +
          "=" +
          encodeURIComponent(ingredientsState.ingredients[i])
      );
    }

    queryParams.push("price=" + ingredientsState.totalPrice);
    console.log(queryParams);

    const queryString = queryParams.join("&");

    props.history.push({
      pathname: "/checkout",
      search: "?" + queryString
    });
  };

  let orderSummary = (
    <OrderSummary
      ingredients={ingredientsState.ingredients}
      purchaseCancel={purchaseCancelHandler}
      purchaseContinue={purchaseContinueHandler}
      price={ingredientsState.totalPrice}
    />
  );
  if (ingredientsState.loading) {
    orderSummary = <Spinner />;
  }

  //console.log(disabledInfo);
  return (
    <Auxilliary>
      <Modal
        show={ingredientsState.purchasing}
        modalClosed={purchaseCancelHandler}
      >
        {orderSummary}
      </Modal>

      <Burger ingredients={ingredientsState.ingredients} />
      <BuildControls
        initial_price={INITIAL_PRICE}
        ingredientAdded={addIngredientHandler}
        ingredientRemoved={removeIngredientHandler}
        disabled={disabledInfoHandler}
        price={ingredientsState.totalPrice}
        ordered={purchaseHandler}
      />
    </Auxilliary>
  );
}

export default withErrorHandler(BurgerBuilder);
