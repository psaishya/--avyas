import React from 'react'
import { Link } from 'react-router-dom'

function Header () {
  const userLoginStatus=localStorage.getItem('userLoginStatus');

  const logoutclick=()=>{
            localStorage.removeItem('userLoginStatus')
            localStorage.removeItem('loggedstudent')
            localStorage.removeItem('loggedteacher')
            localStorage.removeItem('token');
            localStorage.removeItem('user');

            window.location.href='/'; 
        }
      

 
  return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container">
    <a className="navbar-brand" href="#">Eavyas</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Courses</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Login
          </a>
          <ul class="dropdown-menu">
          {userLoginStatus!=='true' &&
          <>
            <li><Link className="dropdown-item" to="/loginasstudent">Student</Link></li>
            <li><Link className="dropdown-item" to="/loginasteacher">Teacher</Link></li></>
          }   
          {userLoginStatus==='true' &&
          <>
            <li><a className="dropdown-item" href="/student-dashboard">Dashboard</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" onClick={logoutclick}>Logout</a></li>
            </>}
          
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Header
