import React,{useState} from "react";
import ExpenseFor from "./ExpenseFor";
import './NewExpense.css';
const NewExpense = (props) => {
  const [isEditing,setIsEditing] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  }
  const startEditingHandler = () =>{
    setIsEditing(true);
  }
  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditingHandler} className="editingButton"> Add New Expense</button>}
      {isEditing && <ExpenseFor onSaveExpenseData={saveExpenseDataHandler}/>}
    </div>
  );
};
export default NewExpense;
