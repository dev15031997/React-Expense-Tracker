import React from 'react';
import './ExpenseDate.css';

function ExpenseDate(props)
{
    let month=props.date.toLocaleString('en-US',{month:'long'})
    let day=props.date.toLocaleString('en-US',{day:'2-digit'})
    let year=props.date.toLocaleString('en-US',{year:'2-digit'})
    
    return(
        <div>
            <div  className="expense-date">
                <div className="expense-date__Day">{day}</div>
                <div className="expense-date__month">{month}</div>
                <div className="expense-date__year">{year}</div>
            </div>
        </div>
    )
    
}

export default ExpenseDate;