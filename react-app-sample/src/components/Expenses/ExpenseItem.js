import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./UI/Card";

function ExpenseItem(props) {
  //let title = props.title;
  const [title, newtitle] = useState(props.title);

  const clickHandler = () => {
    newtitle("New Title");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>
      <div className="expense-item__price">${props.amount}</div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
