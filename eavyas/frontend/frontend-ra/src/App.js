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
    checkToken();
    checkUser();
    console.log("component refreshed");
    
  },[token,user]);


  return (
    <>
      {/* <Header /> */}

     <Router>
     <Routes>
        <Route path="*" element={<Main/>}/>
       
        <Route path="/loginasstudent" element={<Loginasstudent setToken={setToken} setUser={setUser} />}/>
        <Route path="/signupasstudent" element={<SignUpasstudent/>}/>
        <Route path="/loginasteacher" element={<Loginasteacher setToken={setToken} setUser={setUser} />}/>
        <Route path="/signupasteacher" element={<SignUpasteacher/>}/>
    </Routes> 
    </Router>
    
    </>
  );
  }
export default App;
