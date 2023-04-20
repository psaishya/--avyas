import { Link, useParams } from "react-router-dom";
import TeacherSide from "./Teacherside";
import {useState,useEffect} from 'react'
import axios from "axios";
const baseUrl = 'http://localhost:8000';

const QuizQuestions = () => {
    const [questionData,setquestionData]=useState([]);
    const [totalResult,settotalResult]=useState(0);
    const {quiz_id}=useParams();
    useEffect(()=>{
        try{
            axios.get(baseUrl+'/quiz-questions/'+quiz_id+'/')
            .then(response=>{
                settotalResult(response.data.length);
                setquestionData(response.data);
            });
        }
        catch(error){
            console.log(error);
        }

    },[]);
    const deletequestion=(question_id)=>{
        try{
            axios.delete(baseUrl+'/question/'+question_id+'/').then((res)=>
            {
                try{
                    axios.get(baseUrl+'/quiz-questions/'+quiz_id+'/')
                    .then(response=>{
                        settotalResult(response.data.length);
                        setquestionData(response.data);
                    });
                }
                catch(error){
                    console.log(error);
                }
            });
        }
        catch(error){
            console.log(error);
        }

    };
  return (
    <div className="container mt-4">
        <div className="row">
            <aside className="col-md-3">
               <TeacherSide/>
            </aside>
            <section className="col-md-9">
                            <div className="card">
                    <h5 className='card-header'>All questions ({totalResult})</h5>
                <div className="card-body">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Question</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {questionData.map((row,index)=>
                            <tr key={index}>
                                <td><Link to ={`/edit-question/`+row.id}>{row.question}</Link></td>
                                <td>
                                    <button onClick={() => deletequestion(row.id)} className="btn btn-danger btn-sm">Remove</button>
                                    <button className="btn btn-info btn-sm ms-1">Edit</button>
                                </td>
                            </tr>
                            )}
                        </tbody>
                    </table>
                    <Link className="btn btn-info btn-sm ms-2" to ='/quiz'>Back to all quizzes</Link>

                </div>
                </div>
            </section>    
        </div>
    </div>
  )
}

export default QuizQuestions
