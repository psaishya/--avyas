import { Link, useParams} from "react-router-dom"
import TeacherSide from "./Teacherside";
import axios from "axios";
import {useState,useEffect} from 'react'
// const baseUrl = 'http://localhost:8000';


function EnrolledStudents(){
    const[studentData,setstudentData] =useState([]);
    let {course_id}=useParams();

    useEffect(()=>{
        try{ 
            axios.get('http://localhost:8000/fetch-enrolled-students/'+course_id+'/')
        .then((res)=>{
                //console.log(res.data);
                setstudentData(res.data)
        });
        }catch(error){
            console.log(error);
        }
    },[course_id]);
   
       

    return(
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                   <TeacherSide/>
                </aside>
                <section className="col-md-9">
                                <div className="card">
                        <h5 className='card-header'>Enrolled Student List</h5>
                    <div className="card-body">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>UserName</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {studentData && studentData.map((row,index)=>
                                <tr key={index}>
                                    <td><Link to ={"/view-student/"+row.student.id}>{row.student.firstName}</Link></td>
                                    <td>{row.student.email}</td>
                                    <td>{row.student.userName}</td>
                                    <td>
                                        <Link class="btn btn-success btn-sm " to ={'/view-student/'+row.student.id}>View</Link>

                                    </td>
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

export default EnrolledStudents;