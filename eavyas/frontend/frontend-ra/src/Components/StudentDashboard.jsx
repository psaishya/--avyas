import React from 'react'
import {Link} from 'react-router-dom';
import Sidebar from './sidebar';
import axios from 'axios';
import {useState,useEffect} from 'react'
const baseUrl = 'http://localhost:8000';

function StudentDashboard() { 
    const[noofcourse,setnoofcourse]=useState([]);
    const[nooffavcourse,setnooffavcourse]=useState([]);

    const loggeduser=localStorage.getItem('loggedstudent');
    useEffect(()=>{
       
        try{ 
            axios.get(baseUrl+'/fetch-enrolled-courses/'+ loggeduser +'/')
        .then((res)=>{
                //console.log(res.data);
                setnoofcourse(res.data)
        });
        }catch(error){
            console.log(error);
        }
        try{ 
            axios.get(baseUrl+'/fetch-favourite-courses/'+ loggeduser +'/')
        .then((res)=>{
                //console.log(res.data);
                setnooffavcourse(res.data)
        });
        }catch(error){
            console.log(error);
        }
    },[loggeduser]);
      return (
        <div className='container mt-4'>
            <div className='row'>
                <aside className='col-md-3'>
                    <Sidebar/>
                </aside>
                <section className='col-md-9'>
                <div className='row'>
                    <div className='col-md-4'>
                        <div className='card border-primary'>
                            <h5 className='card-header bg-primary text-white'>Enrolled Courses</h5>
                            <div className='card-body'>
                                <h3><Link to='/my-courses'>{noofcourse.length}</Link></h3>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-4'>
                        <div className='card border-success'>
                            <h5 className='card-header bg-success text-white'> Favorite Courses</h5>
                            <div className='card-body'>
                                <h3><Link to='/favourite-courses'>{nooffavcourse.length }</Link></h3>
                            </div>
                        </div>
                    </div>

                   




                </div>

            </section>

        </div>
      
    </div>
  )
}

export default StudentDashboard

