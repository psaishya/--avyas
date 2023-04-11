import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Home from './Components/Home';
import { useEffect, useState } from 'react';

// import { useNavigate } from 'react-router-dom';
// import {Route,Routes,useNavigate} from "react-router-dom";

function App() {
  const [token,setToken]=useState(null);
  const [user,setUser]=useState('');
  const [message,setMessage]=useState('');
  // const navigate=useNavigate();

  const checkToken=()=>{
    setToken(localStorage.getItem('token'));
  }
  const checkUser=()=>{
      setUser(localStorage.getItem('user'));
  //   if (!token){
  //       console.log("not signed in");
  //     //   // navigate("/login",{replace:true});
  //       window.location.href = '/login';
  //     // setUser(localStorage.getItem('user'));
  // }
  // else{
  //     setUser(localStorage.getItem('user'));
  //   }
}
  useEffect(()=>{
    // if (!localStorage.getItem('token')){
    //   console.log("not signed in");
    //   // navigate("/login",{replace:true});
    //   // window.location.href = '/login';

    // }else{
    //   setUser(localStorage.getItem('user'));
    // }
    checkToken();
    checkUser();
    console.log("component refreshed");
    
  },[token,user]);


  return (
    <>
      {message}
     <Router>
     <Routes>

        <Route path="/home" element={<Home user={user}/>}/>
        <Route path="/login" element={<Login setToken={setToken} setUser={setUser} setMessage={setMessage}/>}/>
        <Route path="/signup" element={<Signup/>}/>
    </Routes> 
    </Router>
    
    </>
  );
  }
export default App;
