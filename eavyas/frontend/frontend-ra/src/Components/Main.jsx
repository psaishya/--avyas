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
import TeacherCourses from './Teachercourses'

//Course Management
import AddCourse from './AddCourse'
import AddChapter from './AddChapter'
import CourseChapters from './CourseChapters'
import ProfileStudent from './ProfileStudent'
import ProfileTeacher from './ProfileTeacher'
import TeacherProfileUpdate from './TeacherProfileUpdate'
import StudentProfileUpdate from './StudentProfileUpdate'
// teacher quiz
import AddQuiz from './AddQuiz'
import AllQuiz from './AllQuiz'
import QuizQuestions from './QuizQuestions'
import AddQuizQuestion from './AddQuizQuestion'
import EditQuiz from './EditQuiz'
import AssignQuiz from './AssignQuiz'
import CourseQuizlist from './CourseQuizlist'
import TakeQuiz from './TakeQuiz'
// student quiz
const Main = () => {
  return (
    <div>
      <Header />
         
            <Switch>
              <Route path = "/" element ={<Home/>} />
               <Route path = "/detail/:course_id" element ={<CourseDetail/>} /> 
               <Route path = "/student-dashboard" element ={<Dashboard/>}/>
               <Route path = "/my-courses" element ={<MyCourses/>}/>
               <Route path= "/teacher-courses" element ={<TeacherCourses/>}/>
               <Route path = "/teacher-dashboard" element ={<TeacherDash/>}/>
               <Route path = "/teacher-detail/:teacher_id" element ={<TeacherDetail/>} /> 
               <Route path = "/all-courses" element ={<AllCourses/>} /> 
               <Route path = "/all-chapters/:course_id" element ={<CourseChapters/>} /> 
               <Route path = "/add-courses" element ={<AddCourse/>} /> 
               <Route path = "/add-chapter/:course_id" element ={<AddChapter/>} /> 
               <Route path= "/student-profile" element ={<ProfileStudent/>} /> 
               <Route path= "/teacher-profile" element ={<ProfileTeacher/>} /> 
               <Route path= "/update-teacher-profile" element ={<TeacherProfileUpdate/>}/>
               <Route path= "/update-student-profile" element ={<StudentProfileUpdate/>}/>
               <Route path = "/quiz" element ={<AllQuiz/>} /> 
               <Route path = "/add-quiz" element ={<AddQuiz/>} /> 
               <Route path = "/add-quiz-question/:quiz_id" element ={<AddQuizQuestion/>} /> 
               <Route path = "/edit-quiz/:quiz_id" element ={<EditQuiz/>} /> 
               <Route path = "/assign-quiz/:course_id" element ={<AssignQuiz/>} /> 
               <Route path = "/all-questions/:quiz_id" element ={<QuizQuestions/>} /> 
               <Route path = "/course-quiz/:quiz_id" element ={<CourseQuizlist/>} /> 
               <Route path = "/take-quiz/:quiz_id" element ={<TakeQuiz/>} /> 


               



            </Switch>
      <Footer/>
    </div>
  )
}

export default Main
