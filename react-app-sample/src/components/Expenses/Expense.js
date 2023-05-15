import Card from "./UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";

export default function Expense(props) {
  const expenses = props.expenses;
  const[filteredYear,setFilteredYear] = useState(2020);
  const onYearChangeHandler = (yearData) =>{
    setFilteredYear(yearData)
    console.log(yearData)
  }
  return (
    <div>
      <ExpenseFilter selected={filteredYear} onYearChange={onYearChangeHandler}></ExpenseFilter>
      <Card className="expenses">
        <ExpenseItem
          title={expenses[0].title}
          amount={expenses[0].amount}
          date={expenses[0].date}
        />
        <ExpenseItem
          title={expenses[1].title}
          amount={expenses[1].amount}
          date={expenses[1].date}
        />
        <ExpenseItem
          title={expenses[2].title}
          amount={expenses[2].amount}
          date={expenses[2].date}
        />
        <ExpenseItem
          title={expenses[3].title}
          amount={expenses[3].amount}
          date={expenses[3].date}
        />
      </Card>
    </div>
  );
}
