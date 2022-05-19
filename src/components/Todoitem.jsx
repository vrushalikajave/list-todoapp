import React from 'react'

const Todoitem = ({value , deleteTodo}) => {
  return (
    <li>{value}
    <button onClick={()=> deleteTodo(value)}> delete</button>
    </li>
  )
}

export default Todoitem
