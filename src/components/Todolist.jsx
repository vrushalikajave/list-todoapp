import React from 'react'

// method 1

// const Todolist = ({ todos }) => {
//   return (

//     <div>
//         <h1>Here is your TODO list</h1>
//     <ul>
//       {todos.map(todo=>{
//           return(
//               <li>{todo}</li>
//           )
//       })}
//     </ul>
//     </div>
//   )
// }

// export default Todolist



// method 2
const Todolist = ({ children }) => {
    return (
  
      <div>
          <h1>Here is your TODO list</h1>
      <ul>
       <li>{children}</li>
      </ul>
      </div>
    )
  }
  
  export default Todolist
