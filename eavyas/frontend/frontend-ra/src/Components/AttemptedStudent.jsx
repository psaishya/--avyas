import { useParams } from "react-router-dom";
import { Link } from "react-router-dom"
import Sidebar from "./sidebar";
import TeacherSide from "./Teacherside";
import axios from "axios";
import {useState,useEffect} from 'react'
import QuizResult from "./QuizResult";
const baseUrl = 'http://localhost:8000';


function AttemptedStudent(){
    const[studentData,setstudentData] =useState([]);
    const {quiz_id}=useParams();
    const loggeduser=localStorage.getItem('loggedteacher');
    useEffect(()=>{
 
        try{ 
            axios.get(baseUrl+'/attempted-quiz/'+ quiz_id +'/')
        .then((res)=>{
                //console.log(res.data);
                setstudentData(res.data)
           
        });
        }catch(error){
            console.log(error);
        }
        
    },[]);
    const uniqueStudents = Array.from(
        new Set(studentData.map((row) => row.student.email))
      ).map((email) => {
        return studentData.find((row) => row.student.email === email);
      });
    

    return(
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                   <TeacherSide/>
                </aside>
                <section className="col-md-9">
                                <div className="card">
                        <h5 className='card-header'>Student List</h5>
                    <div className="card-body">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Username</th>
                                    <th>Result</th>
                                    
                                </tr>
                            </thead>
                            <tbody>

                         {uniqueStudents.map((row, index) => (
                    <tr key={index}>
                      <td>{row.student.firstName}</td>
                      <td>{row.student.email}</td>
                      <td>{row.student.userName}</td>
                      <td>                  
                        {/* <button type="button" className="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target={`#resultModal${row.id}`}>
                        Quiz Result</button> */}
                        {/* <div className="modal fade" id={`resultModal${row.id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">                      */}
                        <QuizResult quiz={row.quiz.id} student={row.student.studentId}/>
                        {/* </div> */}
   
                          {/* <QuizResult quiz={row.quiz.id} student={row.student.studentId}/> */}

                      </td> 
    
                    </tr>
                  ))}

                                {/* {studentData.map((row,index)=>
                                <tr key={index}>
                                    <td>{row.student.firstName}</td>
                                    <td>{row.student.email}</td>
                                    <td>{row.student.userName}</td>

                                    <td>     
                                        <Link to="#">Quiz Result</Link>                       
                                        
                                    </td>
                                </tr>
                                )} */}
                            </tbody>
                        </table>
                       

                    </div>
                    </div>
                </section>    
            </div>
        </div>
    )
}

export default AttemptedStudent;