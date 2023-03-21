import React from "react";
import ExpenseFor from "./ExpenseFor";
import './NewExpense.css';
const NewExpense = () => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    console.log(expenseData);
  }
  return (
    <div className="new-expense">
      <ExpenseFor onSaveExpenseData={saveExpenseDataHandler}></ExpenseFor>
    </div>
  );
};
export default NewExpense;
