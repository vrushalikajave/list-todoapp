import React, { useState } from 'react'
import react from "react";

const Todoinput = ({addTodo}) => {
    const[value, SetValue]= useState("")
  return (
    <div>
      
      <input type="text" value={value} placeholder='New todo item' onChange={(e)=>{
          SetValue(e.target.value)
      }}/>

      <button onClick={()=>{
          console.log(value);
          addTodo(value)
          SetValue("");
      }}>Add</button>
    </div>
  )
}

export default Todoinput
