import React, { useState } from "react";
import "./Login.css";

import axios from "axios";
import "./Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-free/css/all.min.css";
const Forgotpasswordstudent = () => {
  const [userName, setuserName] = useState("");
  const [answer, setAnswer] = useState("");
  const [loginmsg, setloginmsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const loginData = {
      userName: userName,
      security:answer      
    };
    const securityFormData = new FormData();
    securityFormData.append("userName", loginData.userName);
    securityFormData.append("security", loginData.security);

    
    try{
      axios.post("http://localhost:8000/studentsecurity/",securityFormData).then((response)=>{
        console.log(response.data);
        if(response.data.bool==true){
          localStorage.setItem('userLoginStatus',true)
          console.log(localStorage.getItem('userLoginStatus'));
    
        const loggedFormData = new FormData();
        loggedFormData.append("userName", loginData.userName);
        axios
          .post("http://localhost:8000/loggedstudent/", loggedFormData)
          .then((response) => {
            const id = response.data.id;
            localStorage.setItem("loggedstudent", id);
            console.log(localStorage.getItem("loggedstudent"));
            localStorage.setItem("userLoginStatus", true);
            console.log(localStorage.getItem("userLoginStatus"));
            window.location.href = "/student-dashboard";
            setloginmsg("Successfully logged in");

          });
        }
        else{
          localStorage.setItem('userLoginStatus',false)
          // alert("Could not login");
        }
        
        
      });
    }
    catch(error){
      console.log(error);
    }
    
  }
  return (
    <div>
      <div className="containera">
        <div className="login">
          <h2>Login as a student</h2>
          <form>
          <div className="login__field">
              <FontAwesomeIcon icon={faUser} className="login__icon" />
              <input
                type="text"
                className="login__input"
                placeholder="Username"
                value={userName}
                onChange={(e) => setuserName(e.target.value)}
              />
            </div>
            <div className="login__field">
            <label htmlFor="security" className="fontLabel text-center mb-3">
                {" "}
                <b>What is your favourite colour?</b>{" "}
              </label>
              <input
                type="text"
                className="login__input"
                placeholder="Your answer"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
              />
            </div>
               
        
            <button
              type="button"
              className="submit-btna"
              onClick={handleSubmit}
            >
              Submit
              <br />
            </button>
            
            <div className="form-link-sgn">
              
              <a href="/loginasstudent" className="link signup-link">
                Back to Login
              </a>
            </div>
            {loginmsg && (
              <div className="alert alert-warning">
                <strong>{loginmsg}</strong>
              </div>
            )}
          </form>
          <div className="line"></div>
          <div className="form-link-sgn">
            <i className="bi bi-house"></i>
            <a href="/" className="link signup-link">
              {" "}
              Go back to home. <br /> <br />
            </a>
            
            <i className="bi bi-person-circle"></i>
            <a href="/loginasteacher" className="link signup-link">
              {" "}
              Login as Teacher
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Forgotpasswordstudent


