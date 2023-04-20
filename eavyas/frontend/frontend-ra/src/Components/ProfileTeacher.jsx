import React from 'react'
import axios from 'axios';
import { useState,useEffect } from 'react';

import Sidebar from './sidebar';
import Teacherside from './Teacherside'

const ProfileTeacher = () => {
    const loggeduser=localStorage.getItem('loggedteacher');
    
    const[userData,setuserData]=useState(
        {
        'firstName':'',
        'lastName':'',
        'gender':'',
        'phoneNo':'',
        'email':'', 
        'userName':'',
        }
      );
       
        
    useEffect(()=>{
        

        try{
            axios.get('http://localhost:8000/teacher/'+loggeduser+'/').then((respose)=>{
            setuserData(respose.data);
        });
        }catch(error){
            console.log(error);
        }
        
    },[]);
  return (
    <>
   
  
        <div className='container mt-4'>
            <div className='row'>
                <aside className='col-md-3'>
                    <Teacherside/>
                </aside>
                <section className='col-md-9'>
                    <div className='card' >
                    <h1 className='card-header'>Your Profile Info </h1>
                    <div className='card-body' >
                    <div className="mb-3 row" >
                        <label htmlFor="firstName" className="col-sm-2 col-form-label">FirstName</label>
                        <div className="col-sm-10" >
                        <input type="text"  readOnly className="form-control-plaintext" id="firstName" defaultValue={userData.firstName}/>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="lastName" className="col-sm-2 col-form-label">LastName</label>
                        <div className="col-sm-10">
                        <input type="text"  readOnly className="form-control-plaintext" id="lastName"  defaultValue={userData.lastName}/>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="gender" className="col-sm-2 col-form-label">Gender</label>
                        <div className="col-sm-10">
                        <input type="text"  readOnly className="form-control-plaintext" id="gender"  defaultValue={userData.gender}/>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="phoneno" className="col-sm-2 col-form-label">Phone No</label>
                        <div className="col-sm-10">
                        <input type="text"  readOnly className="form-control-plaintext" id="phoneNo"  defaultValue={userData.phoneNo}/>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                        <input type="text"  readOnly className="form-control-plaintext" id="email"  defaultValue={userData.email}/>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="userName" className="col-sm-2 col-form-label">Username</label>
                        <div className="col-sm-10">
                        <input type="text"  readOnly className="form-control-plaintext" id="userName"  defaultValue={userData.userName}/>
                        </div>
                    </div>
    
                   
                    <hr/>
                       <a href='/update-teacher-profile' >Update your profile info here.</a>
                    
                    </div>
                    </div>
                </section>
            </div>
        </div>
       </> 
  )
}

export default ProfileTeacher
