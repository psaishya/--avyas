import React from 'react'
import Header from './header'
import Home from './Home'
import Footer from './footer'
import {Routes as Switch,Route, Routes,Router} from 'react-router-dom'

import CourseDetail from "./CourseDetail";
import TeacherDetail from './TeacherDetail'

//student
import Dashboard from './Dashboard';
import MyCourses from './Mycourses';

//List pages
import AllCourses from './AllCourses';


//Teachers
import TeacherDash from './TeacherDash';

//Course Management
import AddCourse from './AddCourse'
import AddChapter from './AddChapter'
import ProfileStudent from './ProfileStudent'
import ProfileTeacher from './ProfileTeacher'
import TeacherProfileUpdate from './TeacherProfileUpdate'
import StudentProfileUpdate from './StudentProfileUpdate'
const Main = () => {
  return (
    <div>
      <Header />
         
            <Switch>
              <Route path = "/" element ={<Home/>} />
               <Route path = "/detail/:course_id" element ={<CourseDetail/>} /> 
               <Route path = "/student-dashboard" element ={<Dashboard/>}/>
               <Route path = "/my-courses" element ={<MyCourses/>}/>
               <Route path = "/teacher -dashboard" element ={<TeacherDash/>}/>
               <Route path = "/teacher-detail/:teacher_id" element ={<TeacherDetail/>} /> 
               <Route path = "/all-courses" element ={<AllCourses/>} /> 
               <Route path = "/add-courses" element ={<AddCourse/>} /> 
               <Route path = "/add-chapter/:course_id" element ={<AddChapter/>} /> 
               <Route path= "/student-profile" element ={<ProfileStudent/>} /> 
               <Route path= "/teacher-profile" element ={<ProfileTeacher/>} /> 
               <Route path= "/update-teacher-profile" element ={<TeacherProfileUpdate/>}/>
               <Route path= "/update-student-profile" element ={<StudentProfileUpdate/>}/>


            </Switch>
      <Footer/>
    </div>
  )
}

export default Main
