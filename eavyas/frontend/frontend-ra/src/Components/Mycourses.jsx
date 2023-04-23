import { Link } from "react-router-dom"
import Sidebar from "./sidebar";
import { useState,useEffect } from 'react';
import axios from 'axios';


function MyCourses(){
    // const[courseData,setcourseData] =useState([]);
    // const loggedstudentId=localStorage.getItem('loggedstudent');
    // useEffect(()=>{
    //     try{ 
    //         axios.get('http://localhost:8000/fetch-all-enrolled-students/'+teacher_id+'/')
    //     .then((res)=>{
    //             //console.log(res.data);
    //             setstudentData(res.data)
    //     });
    //     }catch(error){
    //         console.log(error);
    //     }
    // },[course_id]);
    return(
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                   <Sidebar />
                </aside>
                <section className="col-md-9">
                                <div className="card">
                        <h5 className='card-header'>My Courses</h5>
                    <div className="card-body">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Instructor</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Java</td>
                                    <td><Link to= "">Austin Justice</Link></td>
                                    <td>
                                        <button className="btn btn-danger btn-sm active">Remove</button>
                                    </td>
                                </tr>
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