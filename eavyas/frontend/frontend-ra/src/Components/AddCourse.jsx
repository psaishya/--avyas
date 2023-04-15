import { Link } from "react-router-dom";
import TeacherSide from "./Teacherside";
import {useState,useEffect} from 'react'
import axios from "axios";
const baseUrl = 'http://localhost:8000';


function AddCourse(){
    const [cats,setCats] = useState([]);
    useEffect(()=>{
        try{ 
            axios.get(baseUrl+'/category/')
        .then((res)=>{
                //console.log(res.data);
                setCats(res.data)
        });
        }catch(error){
            console.log(error);
        }
    },[]);
    //console.log(cats);
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
                                    <select name= 'category' className="form-control">
                                        {cats.map((category,index)=>{return <option key={index}>{category.title}</option>})}
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="title" className="from-label">Course Title</label>
                                    <input type="text" id="title" className="form-control" placeholder="Course Title"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <textarea className="form-control" id="description"></textarea>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="video" className="from-label">Thumbnail</label>
                                    <input type="file" id="video" className="form-control"/>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default AddCourse