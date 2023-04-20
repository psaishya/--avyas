import { Link } from "react-router-dom"
import TeacherSide from "./Teacherside";
import {useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from "axios";
const baseUrl = 'http://localhost:8000';

const EditQuiz = () => {
    const[quizData,setquizData] =useState({
        title:'',
        detail:'',
    });
    const {quiz_id}=useParams();

    const loggeduser=localStorage.getItem('loggedteacher');

    useEffect(()=>{
        try{ 
            axios.get(baseUrl+'/teacher-quiz-detail/'+ quiz_id +'/')
        .then((res)=>{
                //console.log(res.data);
                setquizData({
                    title: res.data.title,
                    detail: res.data.detail
                })
                
        });
        }catch(error){
            console.log(error);
        }
    },[]);
    const handleChange=(event)=>{
        setquizData({
            ...quizData,
            [event.target.name]:event.target.value
        });
    }
    const formSubmit=()=>{
        const teacherId=localStorage.getItem('loggedteacher');
        const _formData=new FormData();
        _formData.append('teacher',teacherId);
        _formData.append('title',quizData.title);
        _formData.append('detail',quizData.detail);

        try{
            axios.put(baseUrl+'/teacher-quiz-detail/'+quiz_id+'/', _formData).then((res)=>{
                // window.location.href='/add-quiz';
                console.log(res);

            });
        }catch(error){
            console.log(error);
        }

    };
  return (
    <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <TeacherSide/>
                </aside>
                <div className="col-9">
                    <div className="card">
                        <h5 className="card-header">Edit Quiz</h5>
                        <div className="card-body">
                            <form>
                            
                                <div className="mb-3">
                                    <label htmlFor="title" className="from-label">Title</label>
                                    <input type="text" value={quizData.title} onChange={handleChange} name='title' id="title" className="form-control" placeholder="Title"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="detail" className="form-label">Detail</label>
                                    <textarea value={quizData.detail} onChange={handleChange} name='detail'className="form-control" id="detail"></textarea>
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

export default EditQuiz
