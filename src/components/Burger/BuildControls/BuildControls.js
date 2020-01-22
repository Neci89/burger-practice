import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import classes from "./BuildControls.module.css";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];

const BuildControls = props => {
  return (
    <div className={classes.BuildControls}>
      <p>
        Current Price: <strong>{props.price.toFixed(2)}</strong>
      </p>
      {controls.map(ctrls => (
        <BuildControl
          key={ctrls.label}
          label={ctrls.label}
          added={() => props.ingredientAdded(ctrls.type)}
          removed={() => props.ingredientRemove(ctrls.type)}
          disabled={props.disabled[ctrls.type]}
        />
      ))}

      <button className={classes.OrderButton} disabled={!props.purchasable}>
        ORDER NOW
      </button>
    </div>
  );
};

export default BuildControls;
