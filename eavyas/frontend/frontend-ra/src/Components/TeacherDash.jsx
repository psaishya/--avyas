import { Link } from "react-router-dom";
import TeacherSide from "./Teacherside";
import { useState, useEffect } from "react";
import axios from "axios";

const baseUrl = "http://localhost:8000";

function TeacherDash() {
  const [dashboardData, setDashboardData] = useState([]);
  const loggedUser = localStorage.getItem("loggedteacher");

  useEffect(() => {
    try {
      axios.get(baseUrl + "/teacher/dashboard/" + loggedUser).then((res) => {
        setDashboardData(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

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
        Teacher Profile
      </h1>
      <div className="row">
        <aside className="col-md-3">
          <TeacherSide />
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
                  Your Courses
                </h5>
                <div className="card-body">
                  <h3>
                    <Link to="/teacher-courses">
                      {dashboardData.total_teacher_courses}
                    </Link>
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
                  Total Students Enrolled
                </h5>
                <div className="card-body">
                  <h3>{dashboardData.total_teacher_students}</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default TeacherDash;
