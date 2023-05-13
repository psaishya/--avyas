import { useParams } from "react-router-dom";
import { Link } from "react-router-dom"
import Sidebar from "./sidebar";
import TeacherSide from "./Teacherside";
import axios from "axios";
import {useState,useEffect} from 'react'
import CheckQuizInCourse from "./CheckQuizInCourse";
const baseUrl = 'http://localhost:8000';


function AssignQuiz(){
    const[quizData,setquizData] =useState([]);
    const[courseData,setcourseData] =useState([]);

    const {course_id}=useParams();

    const loggeduser=localStorage.getItem('loggedteacher');

    useEffect(()=>{
        try{ 
            axios.get(baseUrl+'/teacher-quiz/'+ loggeduser +'/')
        .then((res)=>{
                //console.log(res.data);
                setquizData(res.data)

        });
        }catch(error){
            console.log(error);
        }
        try{ 
            axios.get(baseUrl+'/course/'+ course_id +'/')
        .then((res)=>{
                //console.log(res.data);
                setcourseData(res.data)

        });
        }catch(error){
            console.log(error);
        }
        
    },[]);
    

    return(
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                   <TeacherSide/>
                </aside>
                <section className="col-md-9">
                                <div className="card">
                        <h5 className='card-header'>Assign quiz <span className="text-primary">({courseData.title})</span></h5>
                    <div className="card-body">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {quizData.map((quiz,index)=>
                                <tr key={index}>
                                    <td><Link to= {`/all-questions/`+quiz.id}>{quiz.title}</Link></td>
                                    
                                    <td>     
                                        <CheckQuizInCourse quiz={quiz.id} course={course_id}/>                        
                                        
                                    </td>
                                </tr>
                                )}
                            </tbody>
                        </table>
                        <Link className="btn btn-info btn-sm ms-2" to ='/teacher-courses'>Back to all course.</Link>


                    </div>
                    </div>
                </section>    
            </div>
        </div>
    )
}

export default AssignQuiz;