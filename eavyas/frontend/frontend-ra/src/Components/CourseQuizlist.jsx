import { Link } from "react-router-dom"
import Sidebar from "./sidebar";
import axios from "axios";
import {useParams} from "react-router-dom";
import {useState,useEffect} from 'react'
import CheckQuizStatusForStudents from "./CheckQuizStatusForStudents";
const baseUrl = 'http://localhost:8000';

function CourseQuizlist(){
    const[quizData,setquizData] =useState([]);
    const loggeduser=localStorage.getItem('loggedstudent');
    let{course_id}=useParams();
    useEffect(()=>{
        console.log(course_id);
        try{ 
            axios.get(baseUrl+'/fetch-assigned-quiz/'+ course_id +'/')
        .then((res)=>{
                console.log(res.data);
                setquizData(res.data)
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
                        <h5 className='card-header'>Quiz List</h5>
                    <div className="card-body">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Quiz</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {quizData.map((row,index)=>
                                
                              <tr>
                              
                                <td>{row.quiz.title}</td>
                                <CheckQuizStatusForStudents quiz={row.quiz.id} student={loggeduser}/>
                                </tr>
                                )}
                            </tbody>
                        </table>
                        <Link className="btn btn-info btn-sm ms-2" to ='/my-courses'>Back</Link>

                    </div>
                    </div>
                </section>    
            </div>
        </div>
    )
}

export default CourseQuizlist;