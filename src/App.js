import React,{useState,useEffect} from 'react';
import Expenses from "./components/Expenses"
import NewExpense from './components/NewExpense/NewExpense';


let DUMMY_EXPENSE=[]

const App=()=>
{
    const [expenses,setExpenses]=useState(DUMMY_EXPENSE)

    const fetchData=()=>
    {
        // From database
        fetch('http://localhost/sample-api/api/read.php').then(response=>
                {
                    return response.json()
                }).then(data=>
                {
                        setExpenses(data)
                })
    }

    useEffect(()=>
    {
        fetchData()
    },[])

    const addExpenseHandler=(expense)=>
    {
        // const updatedExpense = [expense, ...expenses];               
        // setExpenses(updatedExpense);
        
        // To database
        fetch('http://localhost/sample-api/api/read.php',{
            method:'POST',
            body:JSON.stringify(expense),
            headers:{
                'content-Type':'application/json'
            }
        }).then(
            response=>{
                fetchData()
            }
        )
    }

    return( 
            <div>
                <NewExpense onAddExpense={addExpenseHandler}/>
                <Expenses item={expenses}/>
           </div>
           )
}

export default App










