import { Link, useParams } from "react-router-dom";
import Sidebar from "./sidebar";
import axios from "axios";
import {useState,useEffect} from 'react'
const baseUrl = 'http://localhost:8000';

function TakeQuiz(){
    const[courseData,setCourseData] =useState([]);
    const loggeduser=localStorage.getItem('loggedstudent');
    const [questionData,setquestionData]=useState([]);
    const [totalResult,settotalResult]=useState(0);
    const {quiz_id}=useParams();

    useEffect(()=>{
        try{
            axios.get(baseUrl+'/quiz-questions/'+quiz_id+'/1')
            .then(response=>{
                settotalResult(response.data.length);
                setquestionData(response.data);
            });
        }
        catch(error){
            console.log(error);
        }

    },[]);
    const submitAnswer=(question_id)=>{

    }
    return(
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                   <Sidebar />
                </aside>
                <section className="col-md-9">
                    <h4 className="mb-3 border-bottom pb-1">Quiz Title</h4>
                    {questionData.map((row,index)=>
                        <div className="card">
                             
                        <h5 className='card-header'>{row.question}</h5>
                    <div className="card-body">
                        <table className="table table-bordered">
                            
                            <tbody>
                            <>
                            {/* <tr key={index}>  */}
                               <tr>
                                    <td><button onClick={()=>submitAnswer(row.id)} className="btn btn-outline-secondary" >{row.ans1}</button></td>
                                </tr>
                                <tr>
                                    <td><button onClick={()=>submitAnswer(row.id)} className="btn btn-outline-secondary" >{row.ans2}</button></td>
                                </tr>
                                <tr>
                                    <td><button onClick={()=>submitAnswer(row.id)} className="btn btn-outline-secondary" >{row.ans3}</button></td>
                                </tr>
                                <tr>
                                    <td><button onClick={()=>submitAnswer(row.id)} className="btn btn-outline-secondary" >{row.ans4}  </button></td>
                                </tr>
                                </>
                      
                            </tbody>
                        </table>
                        <button className="btn btn-dark btn-sm">Skip</button>
                        <button className="btn btn-primary btn-sm ms-2">Submit</button>

                    </div>
                    </div>
                          )}
                </section>    
            </div>
        </div>
    )
}

export default TakeQuiz;