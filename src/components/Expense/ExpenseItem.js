import React,{useState} from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
const ExpenseItem = (props)=>{

  const [title,setTitle]=useState(props.title);
  
  const clickHandler = () => {
    setTitle('Updated');
    console.log(title);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-name">
        <h1>{title}</h1>
      </div>
      <div className="expense-item__discription">
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>change</button>
    </Card>
  );
}
export default ExpenseItem;
