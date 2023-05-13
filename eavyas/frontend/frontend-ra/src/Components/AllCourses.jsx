import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const baseUrl = "http://localhost:8000";

function AllCourses() {
  const [courseData, setCourseData] = useState([]);
  const loggeduser = localStorage.getItem("loggedteacher");

  useEffect(() => {
    try {
      axios.get(baseUrl + "/course/").then((res) => {
        setCourseData(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div
      className="container mt-3"
      style={{
        background: "linear-gradient(to left bottom, #f5f5f5, #ccc)",
        marginTop: "2%",
      }}
    >
      <h3
        className="pb-1 mb-4"
        style={{
          fontFamily: "Times New Roman",
          fontWeight: "bold",
          fontSize: "3rem",
          color: "#333",
        }}
      >
        All Courses
      </h3>
      <div className="row mb-4">
        {courseData &&
          courseData.map((course, index) => (
            <div className="col-md-3 mb-4" key={index}>
              <div
                className="card bg-light border-primary rounded"
                style={{
                  height: "100%",
                  boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.1)",
                }}
              >
                <Link to={`/detail/${course.id}`}>
                  <img
                    src={course.thumbnail}
                    className="card-img-top rounded-top"
                    alt={course.title}
                    style={{
                      height: "200px",
                      width: "100%",
                      transition: "transform 0.3s ease",
                    }} 
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = "scale(1.1)";
                      e.currentTarget.style.boxShadow =
                        "0 0.5rem 1rem rgba(0, 0, 255, 0.2)";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  />
                </Link>
                <div className="card-body">
                  <h5
                    className="card-title"
                    style={{
                      fontFamily: "Times New Roman",
                      fontWeight: "bold",
                      color: "#704214",
                      backgroundColor: "#decfb6",
                      padding: "0.5rem",
                      marginBottom: "0",
                    }}
                  >
                    <Link to={`/detail/${course.id}`}>{course.title}</Link>
                  </h5>
                </div>
                <div className="card-footer d-flex justify-content-between align-items-center">
                  <div
                    className="rating"
                    style={{
                      fontFamily: "Garamond",
                      fontWeight: "bold",
                      fontSize: "1.2rem",
                    }}
                  >
                    Rating: {course.course_rating}/5
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default AllCourses;
