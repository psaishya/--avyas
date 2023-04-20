import { Link, useParams } from "react-router-dom";
import TeacherSide from "./Teacherside";
import {useState,useEffect} from 'react'
import axios from "axios";
const baseUrl = 'http://localhost:8000';


function AddQuizQuestion(){
    const [questionData,setquestionData]=useState({
        quiz:'',
        question:'',
        ans1:'',
        ans2:'',
        ans3:'',
        ans4:'',
        right_ans:'',
    });
    const handleChange=(event)=>{
        setquestionData({
            ...questionData,[event.target.name]:event.target.value
        });
    }
    const {quiz_id}=useParams();
    const formSubmit=()=>{
        const _formData=new FormData();
        _formData.append('quiz',quiz_id);
        _formData.append('question',questionData.question);
        _formData.append('ans1',questionData.ans1);
        _formData.append('ans2',questionData.ans2);
        _formData.append('ans3',questionData.ans3);
        _formData.append('ans4',questionData.ans4);
        _formData.append('right_ans',questionData.right_ans);

        try{
            axios.post(baseUrl+'/quiz-questions/'+quiz_id+'/', _formData,{
                headers:{
                    'content-type':'multipart/form-data'
                }
            }).then((res)=>{
                window.location.reload();
                // console.log(res);

            });
        }catch(error){
            console.log(error);
        }
    };
    return(
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <TeacherSide/>
                </aside>
                <div className="col-9">
                    <div className="card">
                        <h5 className="card-header">Add Question</h5>
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="title" className="from-label">Question</label>
                                    <input type="text" id="question" name='question' onChange={handleChange} className="form-control" placeholder="Question"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="ans1" className="from-label">Ans 1</label>
                                    <input type="text" id="ans1" name='ans1' onChange={handleChange} className="form-control" placeholder="Ans 1"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="ans2" className="from-label">Ans 2</label>
                                    <input type="text" id="ans2" name='ans2' onChange={handleChange} className="form-control" placeholder="Ans 2"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="ans3" className="from-label">Ans 3</label>
                                    <input type="text" id="ans3" name='ans3' onChange={handleChange} className="form-control" placeholder="Ans 3"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="ans4" className="from-label">Ans 4</label>
                                    <input type="text" id="ans4" name='ans4' onChange={handleChange} className="form-control" placeholder="Ans 4"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="right_ans" className="from-label">Right answer</label>
                                    <input type="text" id="right_ans" name='right_ans' onChange={handleChange} className="form-control" placeholder="Right ans"/>
                                </div>
                                <button type="submit" onClick={formSubmit} className="btn btn-primary">Submit</button>
                                <Link className="btn btn-info btn-sm ms-2" to ='/quiz'>Back</Link>

                            </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default AddQuizQuestion