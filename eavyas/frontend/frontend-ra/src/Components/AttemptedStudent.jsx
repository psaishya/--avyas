import { useParams } from "react-router-dom";
import { Link } from "react-router-dom"
import Sidebar from "./sidebar";
import TeacherSide from "./Teacherside";
import axios from "axios";
import {useState,useEffect} from 'react'
const baseUrl = 'http://localhost:8000';


function AttemptedStudent(){
    const[studentData,setstudentData] =useState([]);
    const {quiz_id}=useParams();
    const loggeduser=localStorage.getItem('loggedteacher');

    useEffect(()=>{
        try{ 
            axios.get(baseUrl+'/attempted-quiz/'+ quiz_id +'/')
        .then((res)=>{
                //console.log(res.data);
                setstudentData(res.data)

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
                        <h5 className='card-header'>Student List</h5>
                    <div className="card-body">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Username</th>
                                    <th>Result</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {studentData.map((row,index)=>
                                <tr key={index}>
                                    <td>{row.student.firstName}</td>
                                    <td>{row.student.email}</td>
                                    <td>{row.student.userName}</td>

                                    <td>     
                                        <Link to="#">Quiz Result</Link>                       
                                        
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

export default AttemptedStudent;