import TeacherSide from "./Teacherside";
import {useState,useEffect} from 'react'
import axios from "axios";
const baseUrl = 'http://localhost:8000';


function AddQuiz(){
    const [quizData,setquizData]=useState(
        {
            title:"",
            detail:"",
        }
    );
    
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
            axios.post(baseUrl+'/quiz/', _formData).then((res)=>{
                window.location.href='/add-quiz';
            });
        }catch(error){
            console.log(error);
        }
    };

    //console.log(cats);
    return(
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <TeacherSide/>
                </aside>
                <div className="col-9">
                    <div className="card">
                        <h5 className="card-header">Add Quiz</h5>
                        <div className="card-body">
                            <form>
                            
                                <div className="mb-3">
                                    <label htmlFor="title" className="from-label">Title</label>
                                    <input type="text" onChange={handleChange} name='title' id="title" className="form-control" placeholder="Title"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="detail" className="form-label">Detail</label>
                                    <textarea  onChange={handleChange} name='detail'className="form-control" id="detail"></textarea>
                                </div>
                                 
                                <button type="submit" onClick={formSubmit} className="btn btn-primary">Submit</button>
                            </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default AddQuiz