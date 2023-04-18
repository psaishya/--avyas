import { Link } from "react-router-dom"
import Sidebar from "./sidebar";
import TeacherSide from "./Teacherside";
import axios from "axios";
import {useState,useEffect} from 'react'
const baseUrl = 'http://localhost:8000';


function AllQuiz(){
    const[quizData,setquizData] =useState([]);
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
    },[]);

    return(
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                   <TeacherSide/>
                </aside>
                <section className="col-md-9">
                                <div className="card">
                        <h5 className='card-header'>All quiz</h5>
                    <div className="card-body">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>No of questions</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {quizData.map((quiz,index)=>
                                <tr key={index}>
                                    <td><Link to= {`/all-questions/`+quiz.id}>{quiz.title}</Link></td>
                                    <td><Link to= '#'>123</Link></td>
                                    <td>
                                        <Link className="btn btn-info btn-sm ms-2" to ="#">Edit </Link>
                                        <Link className="btn btn-success btn-sm ms-2" to ={`/add-quiz-question/`+quiz.id}>Add Questions </Link>
                                        <button className="btn btn-danger btn-sm ms-2">Remove</button>

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

export default AllQuiz;