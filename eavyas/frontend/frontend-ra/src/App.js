import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { useEffect, useState } from 'react';
import Loginasstudent from './Components/Loginasstudent';
import SignUpasstudent from './Components/Signupasstudent';
import Loginasteacher from './Components/Loginasteacher';
import SignUpasteacher from './Components/Signupasteacher';

import Main from './Components/Main';
import Header from './Components/header';

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
      {/* <Header /> */}

     <Router>
     <Routes>
        <Route path="*" element={<Main/>}/>
       
        <Route path="/loginasstudent" element={<Loginasstudent setToken={setToken} setUser={setUser} setMessage={setMessage}/>}/>
        <Route path="/signupasstudent" element={<SignUpasstudent/>}/>
        <Route path="/loginasteacher" element={<Loginasteacher setToken={setToken} setUser={setUser} setMessage={setMessage}/>}/>
        <Route path="/signupasteacher" element={<SignUpasteacher/>}/>
    </Routes> 
    </Router>
    
    </>
  );
  }
export default App;
