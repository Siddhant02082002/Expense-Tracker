import React from "react";
import ExpenseFor from "./ExpenseFor";
import './NewExpense.css';
const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  }
  return (
    <div className="new-expense">
      <ExpenseFor onSaveExpenseData={saveExpenseDataHandler}></ExpenseFor>
    </div>
  );
};
export default NewExpense;
