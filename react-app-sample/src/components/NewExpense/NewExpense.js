import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

export default function NewExpense(props){
  const onSaveExpenseDataHandler = (enteredExpenseData) =>{
    const expenseData ={
    ...enteredExpenseData,
    id: Math.random().toString()
    };
    props.onSaveNewExpense(expenseData);
  }
  return (
  <div className="new-expense">
    <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler}></ExpenseForm>
  </div>
  );
}
