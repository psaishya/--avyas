import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "./sidebar";
import axios from "axios";
import { useState, useEffect } from "react";
const baseUrl = "http://localhost:8000";

function StudentDashboard() {
  const [noofcourse, setnoofcourse] = useState([]);
  const [nooffavcourse, setnooffavcourse] = useState([]);

  const loggeduser = localStorage.getItem("loggedstudent");
  useEffect(() => {
    try {
      axios
        .get(baseUrl + "/fetch-enrolled-courses/" + loggeduser + "/")
        .then((res) => {
          //console.log(res.data);
          setnoofcourse(res.data);
        });
    } catch (error) {
      console.log(error);
    }
    try {
      axios
        .get(baseUrl + "/fetch-favourite-courses/" + loggeduser + "/")
        .then((res) => {
          //console.log(res.data);
          setnooffavcourse(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, [loggeduser]);
  return (
    <div className="container mt-4">
      <h1
        style={{
          fontFamily: "Times New Roman",
          fontSize: "40px",
          fontWeight: "bold",
          textShadow: "0 2px 4px rgba(0,0,0,.2)",
        }}
      >
        ई Avyas - Student
        <br />
      </h1>
      <div className="row">
        <aside className="col-md-3">
          <Sidebar />
        </aside>
        <section className="col-md-9">
          <div className="row">
            <div className="col-md-4">
              <div
                className="card border-primary"
                style={{
                  transition: "all .2s ease-in-out",
                  transform: "scale(1)",
                  boxShadow: "0 2px 4px rgba(0,0,0,.2)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.1)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                <h5 className="card-header bg-primary text-white">
                  Enrolled Courses
                </h5>
                <div className="card-body">
                  <h3>
                    <Link to="/my-courses">{noofcourse.length}</Link>
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div
                className="card border-success"
                style={{
                  transition: "all .2s ease-in-out",
                  transform: "scale(1)",
                  boxShadow: "0 2px 4px rgba(0,0,0,.2)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.1)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                <h5 className="card-header bg-success text-white">
                  {" "}
                  Favorite Courses
                </h5>
                <div className="card-body">
                  <h3>
                    <Link to="/favourite-courses">{nooffavcourse.length}</Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default StudentDashboard;
