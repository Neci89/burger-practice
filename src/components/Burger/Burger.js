import React from "react";
import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngerient";

const Burger = props => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map(elKey => {
      return [...Array(props.ingredients[elKey])].map((_, i) => {
        return <BurgerIngredient key={elKey + i} type={elKey} />;
      });
    })
    .reduce((prevValue, currentValue) => {
      return prevValue.concat(currentValue);
    }, []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please add ingredients!</p>;
  }
  // console.log(transformedIngredients);
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
