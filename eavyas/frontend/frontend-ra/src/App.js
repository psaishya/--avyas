import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Home from './Components/Home';
import { useEffect, useState } from 'react';


function App() {
  const [token,setToken]=useState(null);
  const [user,setUser]=useState('');
  const [message,setMessage]=useState('');
  
  const checkToken=()=>{
    setToken(localStorage.getItem('token'));
  }
  const checkUser=()=>{
    setUser(localStorage.getItem('user'));
  }
  useEffect(()=>{
    checkToken();
    checkUser();
    console.log("component refreshed");
  },[token,user]);

  return (
    <>
      {message}
    <Router>
     <Routes>

        <Route path="/*" element={<Home />}/>
        <Route path="/login" element={<Login setToken={setToken} setUser={setUser} setMessage={setMessage}/>}/>
        <Route path="/signup" element={<Signup/>}/>
    </Routes> 
    </Router>
    </>
  );
  }
export default App;
