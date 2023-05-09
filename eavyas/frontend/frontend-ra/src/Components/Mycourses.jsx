import { Link } from "react-router-dom"
import Sidebar from "./sidebar";
import axios from "axios";
import {useState,useEffect} from 'react'
const baseUrl = 'http://localhost:8000';

function MyCourses(){
    const[courseData,setCourseData] =useState([]);
    const loggeduser=localStorage.getItem('loggedstudent');

    useEffect(()=>{
        try{ 
            axios.get(baseUrl+'/fetch-enrolled-courses/'+ loggeduser +'/')
        .then((res)=>{
                //console.log(res.data);
                setCourseData(res.data)
        });
        }catch(error){
            console.log(error);
        }
    },[]);
    return(
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                   <Sidebar />
                </aside>
                <section className="col-md-9">
                                <div className="card">
                        <h5 className='card-header'>My Courses ({courseData.length})</h5>
                    <div className="card-body">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Instructor</th>
                                    <th>Quiz</th>

                                </tr>
                            </thead>
                            <tbody>
                                {courseData.map((row,index)=>
                                <tr key={index}>
                                
                                    <td><Link to= {`/detail/`+row.course.id}>{row.course.title}</Link></td>
                                    <td><Link to= {`/teacher-detail/`+row.course.teacher.teacherId}>{row.course.teacher.firstName} {row.course.teacher.lastName}</Link></td>
                                    <td><Link className="btn btn-sm btn-warning" to= {`/course-quiz/`+row.course.id}>Quiz List</Link></td>

                                </tr>
                                )}
                            </tbody>
                        </table>
                        
                    </div>
                    </div>
                </section>    
            </div>
        </div>
    )
}

export default MyCourses;