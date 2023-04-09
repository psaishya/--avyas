import React from 'react';
import './Signup.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPhoneSquare, faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';

const Signup = () => {
  return (
  
      <>
    <div className="container">
      <div className="signup">
        <h2>SignUp</h2>
        <form >
          <div className="box">
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
          </div>
          <div className="box">
            <label htmlFor="email" className="fl fontLabel"> Email ID: </label>
            <div className="fl iconBox">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div className="fr">
              <input type="email" name="email" placeholder="Email Id" className="textBox" 
            // value={email} onChange={(e)=>setEmail(e.target.value)}
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
              <input type="password" name="password" placeholder="Password" className="textBox" 
            // value={password}  onChange={(e)=>{setPassword(e.target.value)}}
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
    
  )
}

export default Signup
