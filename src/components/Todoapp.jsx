import React, { useState } from 'react'
import Todoinput from './Todoinput'
import Todoitem from './Todoitem'
import Todolist from './Todolist'

const Todoapp = () => {
    const [todos, setTodos]=useState([])

    const addTodo = (newTodo)=>{
        setTodos([...todos, newTodo])
    };

    const deleteTodo=(value)=>{
        setTodos(todos.filter((todo)=> todo!==value));
    }

  return (
    <div> 
        TodoApp
      <Todoinput addTodo={addTodo}/>
      {/* method 1--check todolist page there are some changes also for method 1 */}
      {/* <Todolist todos={todos}/> */}   

    {/* method 2- by using children */}
      {/* <Todolist>  {todos.map(todo=>{
          return(
              <li>{todo}</li>
          )
      })}</Todolist>
     
    </div>
  )
} */}

<Todolist>  {todos.map((todo)=>(<Todoitem value={todo} deleteTodo={deleteTodo}></Todoitem>))}</Todolist>
     
    </div>
  )
}


export default Todoapp
