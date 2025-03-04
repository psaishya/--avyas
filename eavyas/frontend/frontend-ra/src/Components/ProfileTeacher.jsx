import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const ProfileTeacher = () => {
  const loggeduser = localStorage.getItem("loggedteacher");
  const [teacherData, setTeacherData] = useState([]);

  const [userData, setuserData] = useState({
    firstName: "",
    lastName: "",
    bio: "",
    gender: "",
    phoneNo: "",
    email: "",
    userName: "",
    profile: "",
  });

  useEffect(() => {
    try {
      axios
        .get("http://localhost:8000/teacher/" + loggeduser + "/")
        .then((respose) => {
          setuserData(respose.data);
        });
    } catch (error) {
      console.log(error);
    }
    try {
      axios
        .get("http://localhost:8000/teacher/" + loggeduser + "/")
        .then((res) => {
          console.log(res.data);
          setTeacherData(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <>
      <div className="container mt-4">
        <div className="row">
          {/* <aside className='col-md-3'>
                <img src={teacherData.profile} style={{maxWidth:'300px'}}className="card-img-top" alt={teacherData.firstname}/> 
                </aside> */}
          <section className="col-md-9">
            <div className="card">
              <h1 className="card-header">Your Profile Info </h1>
              <div className="col-md-3 "></div>
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="d-flex justify-content-center">
                    <img
                      src={teacherData.profile}
                      style={{
                        maxWidth: "200px",
                        maxHeight: "200px",
                        objectFit: "cover",
                        borderRadius: "50%",
                        border: "5px double white",
                      }}
                      className="card-img-top"
                      alt={teacherData.firstname}
                    />
                  </div>
                </div>
                <div className="mb-3 row">
                  <label
                    htmlFor="firstName"
                    className="col-sm-2 col-form-label"
                  >
                    FirstName
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      readOnly
                      className="form-control-plaintext"
                      id="firstName"
                      defaultValue={userData.firstName}
                    />
                  </div>
                </div>
                <div className="mb-3 row">
                  <label htmlFor="lastName" className="col-sm-2 col-form-label">
                    LastName
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      readOnly
                      className="form-control-plaintext"
                      id="lastName"
                      defaultValue={userData.lastName}
                    />
                  </div>
                </div>
                <div className="mb-3 row">
                  <label htmlFor="bio" className="col-sm-2 col-form-label">
                    Bio
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      readOnly
                      className="form-control-plaintext"
                      id="bio"
                      defaultValue={userData.bio}
                    />
                  </div>
                </div>
                <div className="mb-3 row">
                  <label htmlFor="gender" className="col-sm-2 col-form-label">
                    Gender
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      readOnly
                      className="form-control-plaintext"
                      id="gender"
                      defaultValue={userData.gender}
                    />
                  </div>
                </div>
                <div className="mb-3 row">
                  <label htmlFor="phoneno" className="col-sm-2 col-form-label">
                    Phone No
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      readOnly
                      className="form-control-plaintext"
                      id="phoneNo"
                      defaultValue={userData.phoneNo}
                    />
                  </div>
                </div>
                <div className="mb-3 row">
                  <label htmlFor="email" className="col-sm-2 col-form-label">
                    Email
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      readOnly
                      className="form-control-plaintext"
                      id="email"
                      defaultValue={userData.email}
                    />
                  </div>
                </div>
                <div className="mb-3 row">
                  <label htmlFor="userName" className="col-sm-2 col-form-label">
                    Username
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      readOnly
                      className="form-control-plaintext"
                      id="userName"
                      defaultValue={userData.userName}
                    />
                  </div>
                </div>

                <hr />
                <a href="/update-teacher-profile">
                  Update your profile info here.
                </a>
              </div>
            </div>
          </section>
          {/* <aside className='col-md-3'> */}
          {/* <img src={teacherData.profile} style={{maxWidth:'300px'}}className="card-img-top" alt={teacherData.firstname}/>  */}
          {/* </aside> */}
        </div>
      </div>
    </>
  );
};

export default ProfileTeacher;
