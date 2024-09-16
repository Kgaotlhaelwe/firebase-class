import { useState } from "react";
import { addTodoItem } from "../db/db";


function Home() {
  const [todoItem , setTodoItem] =  useState();


  const  handleAddTodoItem  = (()=>{
    addTodoItem(todoItem).then(()=>{
      alert("Successfully");

    }).catch(()=>{

    })
  })
  return (
    <div className="display-todo-container card">
      <div className="display-todo-input">
        <input type="text" placeholder="Enter a new todo" onChange={(e)=> setTodoItem(e.target.value)} /> 
        <button onClick={handleAddTodoItem}>Add Todo</button>
      </div>
      <ul>
        <li >Coding </li>
      </ul>
    </div>
  );
}
export default Home
