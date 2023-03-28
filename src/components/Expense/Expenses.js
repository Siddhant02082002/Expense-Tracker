import ExpenseItem from "./ExpenseItem"
import Card from "../UI/Card";
import './Expenses.css'; 
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
function Expenses(props){
  const [filterYear,setFilteredYear] = useState('2019');
  const filterChangeHandler = selectedYear =>{
    setFilteredYear(selectedYear);
  };
    return(
    <Card className="expenses">
      <ExpensesFilter selected={filterYear} onChangeFilter={filterChangeHandler}></ExpensesFilter>
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      ></ExpenseItem>
    </Card>
    )
}
export default Expenses;