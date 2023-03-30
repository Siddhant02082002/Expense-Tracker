import React,{useState} from "react";
import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const dummy_expenses = [
  {
    title: "Toilet paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  { title: "Car Insurance", amount: 294.67, date: new Date(2021, 3, 28) },
  { title: "New Desk", amount: 450, date: new Date(2021, 5, 25) },
];
const App=()=>{
  const [expenses,setExpenses] = useState(dummy_expenses);
  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense,...prevExpenses];
    }
    );
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
