import { Link } from "react-router-dom"
import Sidebar from "./sidebar";
import TeacherSide from "./Teacherside";
import axios from "axios";
import { useParams } from "react-router-dom";
import {useState,useEffect} from 'react'
const baseUrl = 'http://localhost:8000';


function CourseChapters(){
    const[chapterData,setChapterData] =useState([]);
    const{course_id}=useParams();
    
    const loggeduser=localStorage.getItem('loggedteacher');

    useEffect(()=>{
        try{ 
            axios.get(baseUrl+'/course-chapters/'+ course_id)
        .then((res)=>{
                //console.log(res.data);
                setChapterData(res.data)
        });
        }catch(error){
            console.log(error);
        }
    },[]);

    return(
        <div className="container mt-4">
        <div className="row">
            <aside className="col-md-3">
               <TeacherSide/>
            </aside>
            <section className="col-md-9">
                            <div className="card">
                    <h5 className='card-header'>My Courses</h5>
                <div className="card-body">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Video</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {chapterData.map((chapter,index)=>
                            <tr key={index}>
                                <td><Link to ="#">{chapter.title}</Link></td>
                                <td>
                                        <video controls width="250">
                                            <source src={chapter.video.url} type="video/webm" />

                                            <source src={chapter.video.url} type="video/mp4" />


                                        </video>

                                </td>
                                <td>
                                    <button className="btn btn-danger btn-sm">Remove</button>
                                    <button className="btn btn-info btn-sm ms-1">Edit</button>
                                </td>
                            </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                </div>
            </section>    
        </div>
    </div>
    )
}

export default CourseChapters;