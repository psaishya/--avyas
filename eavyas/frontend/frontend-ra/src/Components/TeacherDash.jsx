import {Link} from 'react-router-dom'
import TeacherSide from './Teacherside';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
const baseUrl = 'http://localhost:8000';

function TeacherDash(){
    const[dashboardData,setdashboardData]=useState([]);
    const[teacherData,setTeacherData]=useState([]);

    const loggeduser=localStorage.getItem('loggedteacher');
    
    useEffect(()=>{
        try{
            axios.get(baseUrl+'/teacher/dashboard/'+loggeduser)
            .then((res)=>{
                setdashboardData(res.data);
            });

        }catch(error){
            console.log(error);
        }
        try{ 
            axios.get(baseUrl + '/teacher/' +loggeduser+'/')
        .then((res)=>{
                console.log(res.data);
                setTeacherData(res.data)
               
        });
        }catch(error){
            console.log(error);
        }
    
    },[]);
  
    return(
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                   <TeacherSide />
                </aside>

                <section className="col-md-9">
                    <div className="row">
                    <div className="col-md-4">
                         <img src={teacherData.profile} style={{maxWidth:'300px'}}className="card-img-top" alt={teacherData.firstname}/> 

            </div>
                        <div className='col-md-4'>
                            <div className="card border-primary">
                                <h5 className="card-header bg-primary text-white">
                                    Total Courses
                                </h5>
                                <div className='card-body'>
                                    <h3><Link to ="/teacher-courses">{dashboardData.total_teacher_courses}</Link></h3>
                                </div>
                            </div>
                        </div>
                    <div className='col-md-4'>
                        <div className="card border-success">
                            <h5 className="card-header bg-success text-white">Enrolled Students</h5>
                            <div className='card-body'>
                                    <h3><Link to ="/teacher-users">{dashboardData.total_teacher_students}</Link></h3>
                                </div>
                        </div>
                    </div>
                    </div>

                </section>    
            </div>
        </div>
    )
}

export default TeacherDash;