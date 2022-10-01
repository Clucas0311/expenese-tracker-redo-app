import React from "react";
import "./Card.css";

const Card = ({ children, className }) => {
  // adds multiple classes to the css so card will be added by default with the addtion of the other class
  const classes = "card " + className;
  return <div className={classes}>{children}</div>;
};

export default Card;
