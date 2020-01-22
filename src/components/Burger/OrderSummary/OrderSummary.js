import React from "react";
import Button from "../../UI/Button/Button";

const OrderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(elKey => {
    return (
      <li key={elKey}>
        <span style={{ textTransform: "capitalize" }}>{elKey}:</span>
        {props.ingredients[elKey]}
      </li>
    );
  });

  return (
    <>
      <h3>Your Order</h3>
      <p>Following ingredients:</p>
      <ul>{ingredientSummary}</ul>
  <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
      <p>Continue to Checkout?</p>
      <Button btnType="Danger" clicked={props.purchaseCancel}>
        Cancel
      </Button>
      <Button btnType="Success" clicked={props.purchaseContinue}>
        Continue
      </Button>
    </>
  );
};

export default OrderSummary;
