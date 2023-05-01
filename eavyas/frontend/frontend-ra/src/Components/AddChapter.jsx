import { Link } from "react-router-dom";
import TeacherSide from "./Teacherside";
import {useState,useEffect} from 'react'
import axios from "axios";
import {useParams} from 'react-router-dom'
const baseUrl = 'http://localhost:8000';


function AddChapter(){
    const loggeduser=localStorage.getItem('loggedteacher');

    const [chapterData,setchapterData] = useState({
        'title':'',
        'description':'',
        'video':'',
    });



    const handleChange=(event)=>{
        setchapterData({
            ...chapterData,
            [event.target.name] : event.target.value
        });
        
    }

    const handleFileChange=(event)=>{
        setchapterData({
            ...chapterData,
            [event.target.name] : event.target.files[0]
        });
    }

    const {course_id}=useParams();

    const formSubmit = ()=>{
        const _formData=new FormData();
       
        _formData.append('course',course_id);
        _formData.append('title', chapterData.title);
        _formData.append('description', chapterData.description);
         _formData.append('video', chapterData.video,chapterData.video.name);
        try{
            axios.post('http://127.0.0.1:8000/chapter/',_formData,{
                'content-type': 'multipart/form-data'
            })
            .then((res)=>{
                //console.log(res.data);
                window.location.href='add-chapter/11';
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
                        <h5 className="card-header">Add Chapter</h5>
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="title" className="from-label">Chapter Title</label>
                                    <input type="text" onChange={handleChange} value={chapterData.title} name = 'title' id="title" className="form-control" placeholder=" Title"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <textarea className="form-control" onChange={handleChange} value={chapterData.description} name = 'description' id="description"></textarea>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="video" className="from-label">Video</label>
                                    <input type="file" onChange={handleFileChange} name= "video" id="video" className="form-control"/>
                                </div>
                                <button type="submit" onClick={formSubmit} className="btn btn-primary">Submit</button>
                                <Link className="btn btn-info btn-sm ms-2" to ='/teacher-courses'>Back to all courses</Link>

                            </form>
                    </div>

                </div>
            </div>
        </div>
        </div>
    )
}

export default AddChapter