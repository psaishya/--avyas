import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import "./Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Loginasteacher = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginmsg, setloginmsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const loginData = {
      username: username,
      // 'email':email,
      password: password,
    };
    axios
      .post("http://localhost:8000/dj-rest-auth/login/", loginData)
      .then((res) => {
        let authToken = localStorage.setItem("token", res.data.key);
        props.setToken(authToken);
        let authUser = localStorage.setItem("user", username);
        props.setUser(authUser);
        // setloginmsg("Successfully logged in");

        // props.setMessage(`Logged in as ${username}`);
        // <Home user={username}/>

        const loggedFormData = new FormData();
        loggedFormData.append("userName", loginData.username);
        axios
          .post("http://localhost:8000/loggedteacher/", loggedFormData)
          .then((response) => {
            const id = response.data.id;
            localStorage.setItem("loggedteacher", id);
            console.log(localStorage.getItem("loggedteacher"));
            console.log(localStorage.getItem("loggedteacher"));

            localStorage.setItem("userLoginStatus", true);
            window.location.href = "/teacher-dashboard";
            setloginmsg("Successfully logged in");
          })
          .catch((err) => {
            console.log(err);
            setloginmsg("You have entered invalid email or password");
          });
      })
      .catch((err) => {
        console.log(err);
        setloginmsg("You have entered invalid email or password");
      });
  };

  return (
    <div>
      <div className="containera">
        <div className="login">
          <h2>Login as a Teacher</h2>
          <form>
            <div className="login__field">
              <FontAwesomeIcon icon={faUser} className="login__icon" />
              <input
                type="text"
                className="login__input"
                placeholder="Username/Email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="login__field">
              <FontAwesomeIcon icon={faLock} className="login__icon" />
              <input
                type="password"
                className="login__input"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-link-sgn">
              <a href="forgot-password-teacher" className="forgot-pass">
                Forgot password?
              </a>
            </div>
            <button type="button" className="submit-btn" onClick={handleSubmit}>
              Login
            </button>
            <div className="form-link-sgn">
              Don't have an account?{" "}
              <a href="/signupasteacher" className="link signup-link">
                Signup
              </a>
            </div>
            {loginmsg && (
              <div className="alert alert-warning">
                <strong>{loginmsg}</strong>
              </div>
            )}</form>
          <div className="line"></div>
          <div className="form-link-sgn">
            <i className="bi bi-house"></i>
            <a href="/" className="link signup-link">
              {" "}
              Go back to home. <br /> <br />
            </a>
            <i className="bi bi-person-circle"></i>
            <a href="/loginasstudent" className="link signup-link">
              {" "}
              Login as Student
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loginasteacher;
