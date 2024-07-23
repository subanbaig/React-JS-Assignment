import React, { useState } from "react";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import 'bootstrap/dist/css/bootstrap.min.css';
      
const App = () => {  
  const [isloggedIn,setIsLoggedIn] = useState(true)
   
  const toggle = ()=>{   
    setIsLoggedIn(!isloggedIn)
  }  
  return (
    <div>
      {   
        isloggedIn ?<Login click={toggle}/>:  <Signup click={toggle}/>
      }
    </div>
  );
};

export default App;