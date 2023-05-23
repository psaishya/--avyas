import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Loginasstudent from './Components/Loginasstudent';
import SignUpasstudent from './Components/Signupasstudent';
import Loginasteacher from './Components/Loginasteacher';
import SignUpasteacher from './Components/Signupasteacher';
import Main from './Components/Main';
import Forgotpasswordstudent from './Components/Forgotpasswordstudent';
import Forgotpasswordteacher from './Components/Forgotpasswordteacher';

// import Header from './Components/header';


function App() {
  const [token,setToken]=useState(null);
  const [user,setUser]=useState('');
  

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
      {/* <Header /> */}
        {/* <div className ="background"> */}
     <Router>
     <Routes>
        <Route path="*" element={<Main/>}/>
       
        <Route path="/loginasstudent" element={<Loginasstudent setToken={setToken} setUser={setUser} />}/>
        <Route path="/signupasstudent" element={<SignUpasstudent/>}/>
        <Route path="/loginasteacher" element={<Loginasteacher setToken={setToken} setUser={setUser} />}/>
        <Route path="/signupasteacher" element={<SignUpasteacher/>}/>
        <Route path = "/forgot-password-student" element ={<Forgotpasswordstudent/>} /> 
        <Route path = "/forgot-password-teacher" element ={<Forgotpasswordteacher/>} /> 

    </Routes> 
    </Router>
    {/* </div> */}
    
    </>
  );
  }
export default App;
