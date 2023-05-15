import React from "react";
import './ExpenseFilter.css';

export default function ExpenseFilter(props)
{
    const onYearChangeHandler = (event) =>
    {
        props.onYearChange(event.target.value);
    }
    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label>Year</label>
                <select value={props.selected} onChange={onYearChangeHandler}>
                    <option value="0">Select Year</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                </select>
            </div>
        </div>
    );
}