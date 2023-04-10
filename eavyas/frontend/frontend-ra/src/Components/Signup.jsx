import React, { useState } from 'react'
import './Signup.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPhoneSquare, faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';

const SignUp = () => { 
  
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password1: "",
    password2: "",
  });

  const { username,email, password1, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password1 !== password2) {
      console.log("Passwords do not match");
    } else {
      const newUser = {
        username,
        email,
        password1,
        password2,
      };
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        const body = JSON.stringify(newUser);
        const res = await axios.post(
          "http://localhost:8000/dj-rest-auth/registration/",
          body,
          config
        );
        console.log(res.data);
      } catch (err) {
        console.log(err.response.data);
      }
    }
  }
  return (
    <>
    <div className="container">
      <div className="signup">
        <h2>SignUp</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          {/* <div className="box">
            <label htmlFor="firstName" className="fl fontLabel"> First Name: </label>
            <div className="new iconBox">
              <FontAwesomeIcon icon={faUser} />
            </div>
            <div className="fr">
              <input type="text" name="firstName" placeholder="First Name" className="textBox" autoFocus={true} required={true} />
            </div>
            <div className="clr"></div>
          </div>
          <div className="box">
            <label htmlFor="secondName" className="fl fontLabel"> Last Name: </label>
            <div className="fl iconBox">
              <FontAwesomeIcon icon={faUser} />
            </div>
            <div className="fr">
              <input type="text" name="secondName" placeholder="Last Name" className="textBox" required={true} />
            </div>
            <div className="clr"></div>
          </div>
          <div className="box">
            <label htmlFor="phone" className="fl fontLabel"> Phone No.: </label>
            <div className="fl iconBox">
              <FontAwesomeIcon icon={faPhoneSquare} />
            </div>
            <div className="fr">
              <input type="text" name="phoneNo" maxLength={10} placeholder="Phone No." className="textBox" required={true} />
            </div>
            <div className="clr"></div>
          </div> */}
          <div className="box">
            <label htmlFor="email" className="fl fontLabel"> Email ID: </label>
            <div className="fl iconBox">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div className="fr">
              <input type="email" name="email" placeholder="Email Id" className="textBox" 
              onChange={(e) => onChange(e)}
              required={true} />
            </div>
            <div className="clr"></div>
          </div>
          <div className="box">
            <label htmlFor="username" className="fl fontLabel"> User Name: </label>
            <div className="fl iconBox">
              <FontAwesomeIcon icon={faUser} />
            </div>
            <div className="fr">
              <input type="text" name="username" placeholder="User Name" className="textBox"
              value={username} 
              onChange={(e) => onChange(e)}
              required={true} />
            </div>
            <div className="clr"></div>
          </div>
          <div className="box">
            <label htmlFor="password" className="fl fontLabel"> Password </label>
            <div className="fl iconBox">
              <FontAwesomeIcon icon={faKey} />
            </div>
            <div className="fr">
              <input type="password" name="password1" placeholder="Password" className="textBox" 
              value={password1}  onChange={(e) => onChange(e)}
              required={true} />
            </div>
            <div className="clr"></div>
          </div>
          <div className="box">
            <label htmlFor="password2" className="fl fontLabel"> Re-enter Password </label>
            <div className="fl iconBox">
              <FontAwesomeIcon icon={faKey} />
            </div>
            <div className="fr">
              <input type="password" name="password2" placeholder="Password again" className="textBox" 
              value={password2}  onChange={(e) => onChange(e)}
              required={true} />
            </div>
            <div className="clr"></div>
          </div>
          <div className="box radio">
            <label htmlFor="gender" className="fl fontLabel"> Gender: </label>
            <input type="radio" name="Gender" value="Male" required={true} /> Male &nbsp; &nbsp; &nbsp; &nbsp;
            <input type="radio" name="Gender" value="Female" required={true} /> Female
          </div>
          <div className="box terms">
            <input type="checkbox" name="Terms" required={true} /> &nbsp; I accept the terms and conditions
          </div>
          <button type="submit" className="submit-btn" >SignUp</button>
          <div className="line"></div>
          <div className="form-link-sgn">
            Already have an account?  <a href="/login" >Login Here</a>
          </div>
        </form>
      </div>
    </div>
    </>
  );
  }
  export default SignUp;
