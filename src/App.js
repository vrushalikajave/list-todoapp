


import logo from './logo.svg';
import { useState } from "react";
import './App.css';
import Counter from './components/Counter';
import Todoapp from './components/Todoapp';

function App() {
  const [toggle, Settoggle]= useState(false);
  return (
    <div className="App">
         <button onClick={()=>Settoggle(!toggle)}> Toggle</button>
         {toggle? <Counter/> : <Todoapp/>}

         
        {/* <div/>
        <div></div>
        <div> {false} </div>
        <div> {null}  </div>
        <div> {undefined} </div>
        <div> {true} </div> */}

    </div>
  );
}

export default App;


// function App() {
//   const [toggle, Settoggle]= useState(false);
//   return (
//     <div className="App">
//          <button onClick={()=>Settoggle(!toggle)}> {toggle? "Hide":"Show"}</button>
//          {toggle? <Counter/> : null}
//     </div>
//   );
// }

// export default App;


// conditonal rendering