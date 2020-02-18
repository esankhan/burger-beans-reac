import React, { Component } from "react";
import Auxilliary from "../../../Hoc/Auxilliary";
import PropTypes from "prop-types";
import "./BurgerIngredients.css";

class BurgerIngredient extends Component {
  render() {
    let ingredient = null;

    switch (this.props.type) {
      case "bread-top":
        ingredient = <div className='BreadTop'> </div>;
        break;
      case "bread-bottom":
        ingredient = (
          <Auxilliary>
            <div className='BreadBottom' />
            {/* <div className='Seeds1' />
            <div className='Seeds2' /> */}
          </Auxilliary>
        );
        break;
      case "meat":
        ingredient = <div className='Meat'> </div>;
        break;
      case "cheese":
        ingredient = <div className='Cheese'> </div>;
        break;
      case "bacon":
        ingredient = <div className='Bacon'> </div>;
        break;
      case "salad":
        ingredient = <div className='Salad'> </div>;
        break;
      default:
        ingredient = null;
    }

    return ingredient;
  }
}

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
};

export default BurgerIngredient;
