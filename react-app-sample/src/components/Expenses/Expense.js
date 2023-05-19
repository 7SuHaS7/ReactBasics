import Card from "./UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";

export default function Expense(props) {
  const items = [...props.expenses];

  const [filteredYear, setFilteredYear] = useState("2020");

  const onYearChangeHandler = (yearData) => {
    setFilteredYear(yearData);
  };

  const filteredExpenses = items.filter((expense) => {
    return expense.date.getFullYear().toString().trim() === filteredYear.trim();
  });

  let dataItems = <p>No Expenses Found !!!</p>;

  if (filteredExpenses.length > 0) {
    dataItems = filteredExpenses.map((item) => (
      <ExpenseItem
        key={item.id}
        title={item.title}
        amount={item.amount}
        date={item.date}
      />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onYearChange={onYearChangeHandler}
        ></ExpenseFilter>
        {dataItems}
      </Card>
    </div>
  );
}
