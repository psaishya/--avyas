import { Link } from "react-router-dom";
// import Sidebar from "./sidebar";
import TeacherSide from "./Teacherside";
import axios from "axios";
import { useState, useEffect } from "react";
const baseUrl = "http://localhost:8000";

function TeacherCourses() {
  const [courseData, setCourseData] = useState([]);
  const loggeduser = localStorage.getItem("loggedteacher");

  useEffect(() => {
    try {
      axios
        .get(baseUrl + "/teacher-courses/" + loggeduser + "/")
        .then((res) => {
          //console.log(res.data);
          setCourseData(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, [loggeduser]);
  const handledelete = (course_id) => {
    try {
      axios.delete(baseUrl + "/course/" + course_id + "/").then((res) => {
        try {
          axios
            .get(baseUrl + "/teacher-courses/" + loggeduser + "/")
            .then((res) => {
              //console.log(res.data);
              setCourseData(res.data);
            });
        } catch (error) {
          console.log(error);
        }
      });
    } catch (error) {
      console.log(error);
    }
    console.log("handle delete");
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <aside className="col-md-3">
          <TeacherSide />
        </aside>
        <section className="col-md-9">
          <div className="card">
            <h5 className="card-header">My Courses</h5>
            <div className="card-body">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Image</th>
                    <th>No of students</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {courseData.map((course, index) => (
                    <tr key={index}>
                      <td>
                        <Link to={"/all-chapters/" + course.id}>
                          {course.title}
                        </Link>
                      </td>
                      <td>
                        <img
                          src={course.thumbnail}
                          width="80"
                          className="rounded"
                          alt={course.title}
                        />
                      </td>
                      <td>
                        <Link to={"/enrolled-students/" + course.id}>
                          {" "}
                          {course.total_enrolled_students}
                        </Link>
                      </td>
                      <td>
                        <Link
                          className="btn btn-danger btn-sm ms-2"
                          onClick={() => handledelete(course.id)}
                        >
                          Remove
                        </Link>
                        <Link
                          className="btn btn-success btn-sm ms-2"
                          to={"/add-chapter/" + course.id}
                        >
                          Add Chapter{" "}
                        </Link>
                        <Link
                          className="btn btn-warning btn-sm ms-2"
                          to={"/assign-quiz/" + course.id}
                        >
                          Assign Quiz{" "}
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default TeacherCourses;
