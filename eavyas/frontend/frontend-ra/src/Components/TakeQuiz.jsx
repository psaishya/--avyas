import { Link, useParams } from "react-router-dom";
import Sidebar from "./sidebar";
import axios from "axios";
import {useState,useEffect} from 'react'
const baseUrl = 'http://localhost:8000';

function TakeQuiz(){
    const loggeduser=localStorage.getItem('loggedstudent');
    const [questionData,setquestionData]=useState([]);
    const {quiz_id}=useParams();

    useEffect(()=>{
        try{
            axios.get(baseUrl+'/quiz-questions/'+quiz_id+'/1')
            .then(response=>{
                // settotalResult(response.data.length);
                setquestionData(response.data);
                console.log(questionData);

            });
        }
        catch(error){
            console.log(error);
        }

    },[]);
    const submitAnswer=(question_id,right_ans)=>{
        const _formData=new FormData();
        _formData.append('student',loggeduser);
        _formData.append('question',question_id);
        _formData.append('quiz',quiz_id);
        _formData.append('right_ans',right_ans);
           
    
        try{
            axios.post(baseUrl+'/attempt-quiz/', _formData,{
                headers:{
                    'content-type':'multipart/form-data'
                }
            }).then((res)=>{
                // window.location.reload();
                    // console.log(res);
                    try{
                        axios.get(baseUrl+'/quiz-questions/'+quiz_id+'/next-question/'+question_id+'/')
                        .then(response=>{
                            // settotalResult(response.data.length);
                            setquestionData(response.data);
                        });
                    }
                    catch(error){
                        console.log(error);
                    }
            
    
            });
        }catch(error){
            console.log(error);
        }
        

    }
    return(
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                   <Sidebar />
                </aside>
                <section className="col-md-9">
                {questionData.map((row,index)=>
                    <>
                    <h4 className="mb-3 border-bottom pb-1">Quiz title : {row.quiz.title}</h4>
                    {/* {questionData.map((row,index)=> */}
                        <div className="card">
                             
                        <h5 className='card-header'>Q.  {row.question}</h5>
                    <div className="card-body">
                        <table className="table table-bordered">
                            
                            <tbody>
                            <>
                            {/* <tr key={index}>  */}
                               <tr>
                                    <td><button onClick={()=>submitAnswer(row.id,row.ans1)} className="btn btn-outline-secondary" >{row.ans1}</button></td>
                                </tr>
                                <tr>
                                    <td><button onClick={()=>submitAnswer(row.id,row.ans2)} className="btn btn-outline-secondary" >{row.ans2}</button></td>
                                </tr>
                                <tr>
                                    <td><button onClick={()=>submitAnswer(row.id,row.ans3)} className="btn btn-outline-secondary" >{row.ans3}</button></td>
                                </tr>
                                <tr>
                                    <td><button onClick={()=>submitAnswer(row.id,row.ans4)} className="btn btn-outline-secondary" >{row.ans4}  </button></td>
                                </tr>
                                </>
                      
                            </tbody>
                        </table>
                        {/* <button className="btn btn-dark btn-sm">Skip</button>
                        <button className="btn btn-primary btn-sm ms-2">Submit</button> */}
                        <Link className="btn btn-info btn-sm ms-2" to ='/course-quiz/1'>Quit</Link>

                    </div>
                    </div>
                    </>
                          )}
                          
                </section>    
            </div>
        </div>
    )
}

export default TakeQuiz;