import React, { useState } from 'react'
import "./Login.css"
// import {Button,Flex,HStack,Image} from "@chakra-ui/react";
// import {FcGoogle} from 'react-icons/fc';
// import {useNavigate} from "react-router-dom";
import axios from 'axios';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Login = (props) => {
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        const loginData={
            'username': username,
            // 'email':email,
            'password':password
        };
        axios.post('http::/localhost:8000/dj-rest-auth/login/',loginData).then(res=>{
            let authToken=localStorage.setItem('token',res.data.key)
            props.setToken(authToken);
            let authUser=localStorage.setItem('user',username)
            props.setUser(authUser);
            props.setMessage(`Logged in as ${username}`);

        }).catch(err=>{
            console.log(err);
            props.setMessage(`You have entered invalid email or password`);
            // console.log(props.message);
        })
        ;
        
    }
  return (
    <div>
      <div className="container" >
      <div className="login">
        <h2>Login</h2>
        <form>
          <div className="login__field">
            <FontAwesomeIcon icon={faUser} className="login__icon" />
            <input type="text" className="login__input" placeholder="Username/Email" 
            value={username} 
            onChange={(e)=>props.setUsername(e.target.value)}
            />
          </div>
          <div className="login__field">
            <FontAwesomeIcon icon={faLock} className="login__icon" />
            <input type="password" className="login__input" placeholder="Password" 
            value={password}  
            onChange={(e)=>props.setPassword(e.target.value)}
            />
          </div>
          <div className="form-link-fp">
            <a href="#" className="forgot-pass">Forgot password?</a>
          </div>
          <button type="submit" className="submit-btn" onClick={handleSubmit} >LogIn</button>
          <div className="form-link-sgn">
            Don't have an account? <a href="/signup" className="link signup-link">Signup</a>
          </div>

        </form>
        <div className="line"></div>
        <div className="social-icons">
        
      
          <a href="#" className="social-login__icon fab fa-instagram"></a>
          <a href="#" className="social-login__icon fab fa-facebook-f"></a>
          <a href="#" className="social-login__icon fab fa-google"  ></a>

        </div>

      </div>
    </div>
    </div>
  )
}

export default Login
