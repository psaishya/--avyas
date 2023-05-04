import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import {IoIosSearch} from "react-icons/io"
function Header () {

  const[searchString,setSearchString]=useState({
    'search':''
  })
  const userLoginStatus=localStorage.getItem('userLoginStatus');
  const teacherlogged=localStorage.getItem('loggedteacher');
  const studentlogged=localStorage.getItem('loggedstudent');


  const handleChange=(event)=>{
    setSearchString({
      ...searchString,
      [event.target.name]:event.target.value
    })
  }
// search course
  const searchCourse=()=>{
    if (searchString.search !==''){
      window.location.href='/search/'+ searchString.search
    }
  }

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
    <form className="d-flex">
      <input name ="search" onChange={handleChange} className="form-control me-2" type="search" placeholder="Search by course title" aria-label="Search"/>
      <button onClick={searchCourse} className="btn btn-info" type="button"><IoIosSearch /></button>
    </form>
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
            {/* Login */}
            <i className="bi bi-person-circle"></i>
          </a>
          <ul className="dropdown-menu">
          {userLoginStatus!=='true' &&
          <>
            <li><Link className="dropdown-item" to="/loginasstudent">Student</Link></li>
            <li><Link className="dropdown-item" to="/loginasteacher">Teacher</Link></li></>
          }   
          {userLoginStatus==='true' &&
          <>
          {teacherlogged &&
            <><li><a className="dropdown-item" href="/teacher-dashboard">Dashboard</a></li>
            <li><a className="dropdown-item" href="/teacher-profile">Profile</a></li></>}

          {studentlogged &&
           <> <li><a className="dropdown-item" href="/student-dashboard">Dashboard</a></li>
            <li><a className="dropdown-item" href="/student-profile">Profile</a></li></>}


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
