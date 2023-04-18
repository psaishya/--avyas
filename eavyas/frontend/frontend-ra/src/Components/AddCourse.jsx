import { Link } from "react-router-dom";
import TeacherSide from "./Teacherside";
import {useState,useEffect} from 'react'
import axios from "axios";
const baseUrl = 'http://localhost:8000';


function AddCourse(){
    const loggeduser=localStorage.getItem('loggedteacher');
    const [cats,setCats] = useState([]);

    const [courseData,setCourseData] = useState({
        'category':'',
        'title':'',
        'description':'',
         'thumbnail':'',
    });

    useEffect(()=>{
        try{ 
            axios.get(baseUrl+'/category/')
        .then((res)=>{
                //console.log(res.data);
                setCats(res.data)
        });
        }catch(error){
            //console.log(error);
          
        }
    },[]);
    //console.log(cats);

    const handleChange=(event)=>{
        setCourseData({
            ...courseData,
            [event.target.name] : event.target.value
        });
        
    }

    const handleFileChange=(event)=>{
        setCourseData({
            ...courseData,
            [event.target.name] : event.target.files[0]
        });
    }

    const formSubmit = ()=>{
        const _formData=new FormData();
        _formData.append('category', courseData.category);
        _formData.append('teacher',loggeduser);
        _formData.append('title', courseData.title);
        _formData.append('description', courseData.description);
         _formData.append('thumbnail', courseData.thumbnail,courseData.thumbnail.name);
        try{
            axios.post('http://127.0.0.1:8000/course/',_formData,{
                'content-type': 'multipart/form-data'
            })
            .then((res)=>{
                //console.log(res.data);
                window.location.href='add-courses';
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
                        <h5 className="card-header">Add Course</h5>
                        <div className="card-body">
                            <form>
                            <div className="mb-3">
                                    <label htmlFor="title" className="from-label">Category</label>
                                    <select name= 'category'onChange={handleChange}  value={courseData.category} className="form-control">
                                        {cats.map((category,index)=>{return <option key={index} value={category.id}>{category.title}</option>})}
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="title" className="from-label">Course Title</label>
                                    <input type="text" onChange={handleChange} value={courseData.title} name = 'title'id="title" className="form-control" placeholder="Course Title"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <textarea onChange={handleChange} className="form-control" value={courseData.description} name="description" id="description"></textarea>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="video" className="from-label">Thumbnail</label>
                                    <input type="file" onChange={handleFileChange} name= "thumbnail" id="video" className="form-control"/>
                                </div>
                                <button type="button" onClick={formSubmit} className="btn btn-primary">Submit</button>
                            </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default AddCourse