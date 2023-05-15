import "./App.css";
import "./components/Expenses/UI/Card.css";
import Expense from "./components/Expenses/Expense";
import Card from "./components/Expenses/UI/Card";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  let expenses = [
    {
      id: "e1",
      title: "Current Bill",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const onSaveNewExpenseHandler = (expenseData) =>
  {
    expenses = [
      ...expenses,
      expenseData
    ]
    console.log(expenses)
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
