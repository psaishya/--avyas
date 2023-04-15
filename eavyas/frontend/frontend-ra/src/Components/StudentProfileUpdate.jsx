import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';

const StudentProfileUpdate = () => {
    const loggeduser=localStorage.getItem('loggedstudent');
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
      const handleChange=(event)=>{
        setuserData({
          ...userData,
          [event.target.name]:event.target.value
        }); 
      };
      const updatedata=(event)=>{
        console.log(userData);
        const userFormData=new FormData();
        userFormData.append("firstName",userData.firstName)
        userFormData.append("lastName",userData.lastName)
        userFormData.append("gender",userData.gender)
        userFormData.append("phoneNo",userData.phoneNo)
        userFormData.append("email",userData.email)
        userFormData.append("userName",userData.userName)
        
        // event.preventDefault();
        try{
          axios.put('http://localhost:8000/student/'+loggeduser+'/',userFormData).then((response)=>{
          console.log(response.data );
          setuserData({
            'firstname':'',
          'lastname':'',
          'gender':'',
          'phoneNo':'',
          'email':'', 
          'username':'',
          'password':'',
          })
        })
        }
        catch(error){
          console.log(error);
        }
        
      };
  return (
    <>
    <div className='container mt-4'>
        <div className='row'>
            <section className='col-md-9'>
                <div className='card' >
                <h1 className='card-header'>Update your Profile </h1>
                <div className='card-body'>
                <div className="mb-3 row">
                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">FirstName</label>
                    <div className="col-sm-10">
                        <input type="text" className='form-control' onChange={handleChange} name="firstName" value={userData.firstName||""}  />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">LastName</label>
                    <div className="col-sm-10">
                        <input type="text" className='form-control' onChange={handleChange} name="lastName" value={userData.lastName||""}  />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Gender</label>
                    <div className="col-sm-10">
                        <input type="text" className='form-control' onChange={handleChange} name="gender" value={userData.gender||""}  />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Phone No.</label>
                    <div className="col-sm-10">
                        <input type="text" className='form-control' onChange={handleChange} name="phoneNo" value={userData.phoneNo||""}  />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="text" className='form-control' onChange={handleChange} name="email" value={userData.email||""}  />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Username</label>
                    <div className="col-sm-10">
                        <input type="text" className='form-control' onChange={handleChange} name="userName" value={userData.userName||""}  />
                    </div>
                </div>

                {/* <div className="mb-3 row">
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" onChange={handleChange} name="password" value={userData.password||""} id="inputPassword"/>
                    </div>
                </div> */}
                <hr/>
                   <button className='btn btn-primary me-2' onClick={updatedata}>Update</button>
                   <button className='btn btn-outline-primary' onClick={()=>{window.location.href="/student-profile"}}>Back</button>
                   
                
                </div>
                </div>
            </section>
        </div>
    </div>
    </>
  )
}

export default StudentProfileUpdate
