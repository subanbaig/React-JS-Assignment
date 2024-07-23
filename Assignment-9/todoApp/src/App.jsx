import React, { useState } from "react";
// import Login from "./Components/Login/Login";
// import Signup from "./Components/Signup/Signup";
import Todo from "./Todos/Todo";
import 'bootstrap/dist/css/bootstrap.min.css';
      
const App = () => {  
  // const [isloggedIn,setIsLoggedIn] = useState(true)
   
  // const toggle = ()=>{   
  //   setIsLoggedIn(!isloggedIn)
  // }  
  return (
    <div>
      {/* {   
        isloggedIn ?<Login click={toggle}/>:  <Signup click={toggle}/>
      } */}

      {/* -------------------------TO DO APP---------------------------- */}
      <Todo />
    </div>
  );
};

export default App;