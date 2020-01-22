import React from "react";

const OrderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(elKey => {
    return (
      <li key={elKey}>
        <span  style={{ textTransform: "capitalize" }}>{elKey}:</span>
        {props.ingredients[elKey]}
      </li>
    );
  });

  return (
    <>
      <h3>Your Order</h3>
      <p>Following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to Checkout?</p>
    </>
  );
};

export default OrderSummary;
