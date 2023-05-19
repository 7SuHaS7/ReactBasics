import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

export default function NewExpense(props){
  const onSaveExpenseDataHandler = (enteredExpenseData) =>{
    const expenseData ={
      id: Math.random().toString(),
    ...enteredExpenseData
    };
    props.onSaveNewExpense(expenseData);
  }
  return (
  <div className="new-expense">
    <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler}></ExpenseForm>
  </div>
  );
}
