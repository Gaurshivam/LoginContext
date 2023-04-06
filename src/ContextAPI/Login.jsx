import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { myContext } from './Context';

const Login = () => {
  var style = {
    width: "400px",
    boxShadow: "0px 0px 10px black",
    margin: "auto",
    textAlign: "center",
    padding: "20px",
    marginTop: "140px"
  }

  const {setIsloggedIn} = useContext(myContext)

  const [user,setUser] = useState({
    Name:"",
    password:""
  })
  
  const handleMyContext = () => {
    if((user.Name === "Shivam" && user.password === "Shivam@123")|| 
    (user.Name === "admin" && user.password === "admin@123")){
         setIsloggedIn(true)
    }else{
      alert("Enter correct Credentials")
    }
  }
  return (
    <div style={style}>
      <h2 style={{ marginBottom: "10px" }}>Login Form </h2>
      <div>
        <input type='text' placeholder='User Name' onChange={(e)=>{setUser({...user,Name:e.target.value})}}/>
      </div><br />
      <div>
        <input type='password' placeholder='password'onChange={(e)=>{setUser({...user,password:e.target.value})}} />
      </div><br />
      <div>
        <button onClick={handleMyContext}>Login</button>
      </div><br />
    </div>
  );
}

export default Login;
