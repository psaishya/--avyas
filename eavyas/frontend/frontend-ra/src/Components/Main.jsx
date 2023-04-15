import React from 'react'
import Header from './header'
import Home from './Home'
import Footer from './footer'
import CourseDetail from "./CourseDetail";
import {Routes as Switch,Route, Routes,Router} from 'react-router-dom'
import Dashboard from './Dashboard';

const Main = () => {
  return (
    <div>
      <Header />
         
            <Switch>
              <Route path = "/" element ={<Home/>} />
               <Route path = "/detail/:course_id" element ={<CourseDetail/>} /> 
               <Route path = "/student-dashboard" element ={<Dashboard/>}/>
            </Switch>
      <Footer/>
    </div>
  )
}

export default Main
