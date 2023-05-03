import { Link } from "react-router-dom"
import Sidebar from "./sidebar";
import axios from "axios";
import {useState,useEffect} from 'react'
const baseUrl = 'http://localhost:8000';

function FavouriteCourses(){
    const[courseData,setCourseData] =useState([]);
    const loggeduser=localStorage.getItem('loggedstudent');

    useEffect(()=>{
        try{ 
            axios.get(baseUrl+'/fetch-favourite-courses/'+ loggeduser +'/')
        .then((res)=>{
                //console.log(res.data);
                setCourseData(res.data)
        });
        }catch(error){
            console.log(error);
        }
    },[loggeduser]);
    return(
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                   <Sidebar />
                </aside>
                <section className="col-md-9">
                                <div className="card">
                        <h5 className='card-header'>Favourite Courses ({courseData.length})</h5>
                    <div className="card-body">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    {/* <th>Instructor</th> */}
                                    <th>Description</th>

                                </tr>
                            </thead>
                            <tbody>
                                {courseData.map((row,index)=>
                                <tr key={index}>
                                
                                    <td><Link to= {`/detail/`+row.course.id}>{row.course.title}</Link></td>
                                    {/* <td><Link to= {`/teacher-detail/`+row.course.teacher.id}>{row.course.teacher.firstName} {row.course.teacher.lastName}</Link></td> */}
                                    <td>{row.course.description}</td>

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

export default FavouriteCourses ;
