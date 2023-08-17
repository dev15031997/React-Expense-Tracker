import React from 'react';
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props)
{   
    return (
        <div className="expense-item">
           {/* <ExpenseDate date={new Date(props.date)}/>                         to be used when using api..and remove below date one*/}   
           <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
            </div>
            <div className="expense-item__price">Rs.{props.amount}</div>
        </div>
    )
}

export default ExpenseItem;