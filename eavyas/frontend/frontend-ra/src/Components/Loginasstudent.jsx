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
import GoogleLogin from 'react-google-login';
import googleLogin from './GoogleLogin';
import Header from './header';



const Loginasstudent = (props) => {
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        const loginData={
            'username': username,
            // 'email':email,
            'password':password
        };
        axios.post('http://localhost:8000/dj-rest-auth/login/',loginData).then(res=>{
            let authToken=localStorage.setItem('token',res.data.key)
            props.setToken(authToken);
            let authUser=localStorage.setItem('user',username)
            props.setUser(authUser);
            props.setMessage(`Logged in as ${username}`);
            
            // <Home user={username}/>

            const loggedFormData=new FormData;
            loggedFormData.append('userName',loginData.username)
            axios.post('http://localhost:8000/loggedstudent/',loggedFormData).then((response)=>{
              const id=response.data.id;
              localStorage.setItem('loggedstudent',id);
              console.log(localStorage.getItem('loggedstudent'));

              console.log(localStorage.getItem('loggedstudent'));
              localStorage.setItem('userLoginStatus',true)
              console.log(localStorage.getItem('userLoginStatus'));
              window.location.href = '/student-dashboard';


          } );  



        }).catch(err=>{
            console.log(err);
            props.setMessage(`You have entered invalid email or password`);
            // console.log(props.message);
        });
        
        
    }

    
  //   const loginwg=(e)=>{
  //     e.preventDefault();
  //     // https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=<CALLBACK_URL_YOU_SET_ON_GOOGLE>&prompt=consent&response_type=code&client_id=<1050321826751-0eh5heri6umccqffjceagt85e61hi98g.apps.googleusercontent.com>&scope=openid%20email%20profile&access_type=offline
  // //     axios.get(`https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=http://localhost:8000/accounts/google/login/callback/&prompt=consent&response_type=code&client_id=1050321826751-0eh5heri6umccqffjceagt85e61hi98g.apps.googleusercontent.com&scope=openid%20email%20profile`)
  // // .then(response => {
  //   // axios.get(`http://localhost:8000/google-auth/`)
  //   // .then(response => {
  //     axios.get(`https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=http://localhost:8000/accounts/google/login/callback/&prompt=consent&response_type=code&client_id=1050321826751-0eh5heri6umccqffjceagt85e61hi98g.apps.googleusercontent.com&scope=openid%20https://www.googleapis.com/auth/userinfo.email%20https://www.googleapis.com/auth/userinfo.profile`)
  //     .then(response => {  
   
  //   const token_or_code = response.data; // assuming the response contains the token or code
  //   console.log(response);
  //   // Assuming the request was successful and returned the code or token, you could then construct a POST request to the specified URL to send it to the server:
  //   const post_data = {
  //     token_or_code: token_or_code
  //   };

  //   axios.post('http://localhost:8000/dj-rest-auth/google/', post_data)
  //     .then(response => {
  //       console.log(response);
  //       console.log("successfullll");
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // })
  // .catch(error => {
  //   console.error(error);
  // });

 
  //   }
    // const responseGoogle = async(response) => {
    //   let googleResponse  = await googleLogin(response.accessToken)
    //   console.log(googleResponse);
    //   console.log(response);
    // }
   
  return (
    <div>

      <div className="containera" >
      <div className="login">
        <h2>Login as a student</h2>
        <form>
          <div className="login__field">
            <FontAwesomeIcon icon={faUser} className="login__icon" />
            <input type="text" className="login__input" placeholder="Username/Email" 
            value={username} 
            onChange={(e)=>setUsername(e.target.value)}
            />
          </div>
          <div className="login__field">
            <FontAwesomeIcon icon={faLock} className="login__icon" />
            <input type="password" className="login__input" placeholder="Password" 
            value={password}  
            onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
          <div className="form-link-fp">
            <a href="#" className="forgot-pass">Forgot password?</a>
          </div>
          <button type="submit" className="submit-btn" onClick={handleSubmit} >LogIn</button>
          <div className="form-link-sgn">
            Don't have an account? <a href="/signupasstudent" className="link signup-link">Signup</a>
          </div>
        </form>
        <div className="line"></div>
        <a href="/"><i className="bi bi-house"></i> Go back to home </a>


    
      
    
      </div>
    </div>
    </div>
  )
};

export default Loginasstudent
