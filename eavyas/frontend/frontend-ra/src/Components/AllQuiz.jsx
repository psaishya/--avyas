import { Link } from "react-router-dom"
import Sidebar from "./sidebar";
import TeacherSide from "./Teacherside";
import axios from "axios";
import {useState,useEffect} from 'react'
const baseUrl = 'http://localhost:8000';


function AllQuiz(){
    const[quizData,setquizData] =useState([]);
    const [totalResult,settotalResult]=useState(0);

    const loggeduser=localStorage.getItem('loggedteacher');

    useEffect(()=>{
        try{ 
            axios.get(baseUrl+'/teacher-quiz/'+ loggeduser +'/')
        .then((res)=>{
                //console.log(res.data);
                setquizData(res.data)
                settotalResult(res.data.length);

        });
        }catch(error){
            console.log(error);
        }
    },[]);
    const  handledelete=(quiz_id)=>{
        try{
            axios.delete(baseUrl+'/quiz/'+quiz_id+'/').then((res)=>
            {
                try{ 
                    axios.get(baseUrl+'/teacher-quiz/'+ loggeduser +'/')
                .then((res)=>{
                        //console.log(res.data);
                        setquizData(res.data)
                        settotalResult(res.data.length);

                });
                }catch(error){
                    console.log(error);
                }
            });
        }
        catch(error){
            console.log(error);
        }
console.log("handle delete");
    }

    return(
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                   <TeacherSide/>
                </aside>
                <section className="col-md-9">
                                <div className="card">
                        <h5 className='card-header'>All quiz ({totalResult})</h5>
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
                                        <Link className="btn btn-info btn-sm ms-2" to ={`/edit-quiz/`+quiz.id}>Edit </Link>
                                        <Link className="btn btn-success btn-sm ms-2" to ={`/add-quiz-question/`+quiz.id}>Add Questions </Link>
                                        <button type="submit"
                                        onClick={() => handledelete(quiz.id)}
                                         className="btn btn-danger btn-sm ms-2">Remove</button>

                                    </td>
                                </tr>
                                )}
                            </tbody>
                        </table>
                        <Link className="btn btn-info btn-sm ms-2" to ='/add-quiz'>Add new quiz</Link>

                    </div>
                    </div>
                </section>    
            </div>
        </div>
    )
}

export default AllQuiz;