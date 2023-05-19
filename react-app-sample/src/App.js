import "./App.css";
import "./components/Expenses/UI/Card.css";
import Expense from "./components/Expenses/Expense";
import Card from "./components/Expenses/UI/Card";
import NewExpense from "./components/NewExpense/NewExpense";
import React, {useState} from "react"

const dumy_expenses = [ 
  
];

function App() {
  

  const [expenses,setExpense] = useState(dumy_expenses);

  const onSaveNewExpenseHandler = (expenseData) =>
  {
    setExpense(prevExpense => {
      return [expenseData,...prevExpense];
    });
  }

  return (
    <div>
      <NewExpense onSaveNewExpense={onSaveNewExpenseHandler}></NewExpense>
      <Card className="Expenses">
        <Expense expenses={expenses} />
      </Card>
    </div>
  );
}

export default App;
