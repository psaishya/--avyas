import React from 'react';
import {useParams} from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState,useEffect } from 'react';
const baseUrl = 'http://localhost:8000';

function TeacherDetail(){
    const[teacherData,setTeacherData] =useState([]);
    const[courseData,setCourseData] =useState([]);
    let {teacher_id}=useParams();
    const loggedstudentId = localStorage.getItem('loggedstudent');
    const loggedteacherId = localStorage.getItem('loggedteacher');

    useEffect(()=>{
        try{ 
            axios.get(baseUrl + '/teacher/' +teacher_id +'/')
        .then((res)=>{
                console.log(res.data);
                setTeacherData(res.data)
                setCourseData(res.data.teacher_courses)
        });
        }catch(error){
            console.log(error);
        }
    },[]);
    return(
        <div className="container mt-3" >
        <div className="row">
            <div className="col-4">
                {loggedteacherId&&
            <Link to  ='/update-teacher-profile'>
                 <img src={teacherData.profile} style={{maxWidth:'300px'}}className="card-img-top" alt={teacherData.firstname}/>
                  </Link>
} 
{loggedteacherId===null&&
                 <img src={teacherData.profile} style={{maxWidth:'300px'}}className="card-img-top" alt={teacherData.firstname}/>

}
            </div>
            <div className="col-8">
                <h3>{teacherData.firstName} {teacherData.lastName}</h3>
                <p> {teacherData.bio}</p>
                {/* <p className='fw-bold'>Skills: <Link to="/teacher-detail/1"> Python</Link>,<Link to="/teacher-detail/1"> Java</Link></p>
                <p className='fw-bold'>Recent Courses: <Link to="/teacher-detail/1"> Django</Link></p>
                <p className='fw-bold'>Ratings: 4/5</p> */}
            </div>
                           
    </div>
 {/*Course_videos*/}
    <div className='card mt-4' style={{maxWidth: '900px'}}>
    <h5 className="card-header">
           Course List
        </h5>
    <div className="list-group list-group-flush ">
        {courseData.map((course,index)=>
       <Link to={`/detail/${course.id}`} key={index} className='list-group-item list-group-item-action'>{course.title}</Link>
        )}
    </div>

    </div>
   
</div>
    );
}

export default TeacherDetail