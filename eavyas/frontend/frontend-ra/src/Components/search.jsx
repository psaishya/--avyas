import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import axios from "axios";
const baseUrl = "http://localhost:8000";

function Search() {
  const [courseData, setCourseData] = useState([]);
  const loggeduser = localStorage.getItem("loggedteacher");
  let { searchstring } = useParams();

  useEffect(() => {
    try {
      axios.get(baseUrl + "/search-courses/" + searchstring).then((res) => {
        //console.log(res.data);
        setCourseData(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="container mt-3">
      <h3
        className="pb-1 mb-4"
        style={{
          fontFamily: "Times New Roman",
          fontWeight: "bold",
          fontSize: "40px",
        }}
      >
        Your Search Results:{" "}
        <span
          className="text-primary"
          style={{ fontFamily: "Times New Roman", fontWeight: "bold" }}
        >
          {searchstring}
        </span>
      </h3>
      <div className="row mb-4">
        {courseData &&
          courseData.map((course, index) => (
            <div className="col-md-3 mb-4" key={index}>
              <div
                className="card"
                style={{
                  boxShadow: "0 0 10px rgba(0,0,0,0.2)",
                  border: "none",
                }}
              >
                <Link to={`/detail/${course.id}`}>
                  {" "}
                  <img
                    src={course.thumbnail}
                    className="card-img-top"
                    alt={course.title}
                    style={{ transition: "transform 0.2s ease-in-out" }}
                    onMouseOver={(e) => {
                      e.target.style.transform = "scale(1.1)";
                      e.target.style.border = "2px solid blue";
                    }}
                    onMouseOut={(e) => {
                      e.target.style.transform = "scale(1)";
                      e.target.style.border = "none";
                    }}
                  />{" "}
                </Link>
                <div className="card-body">
                  <h5 className="card-title">
                    <Link to={`/detail/${course.id}`}>{course.title}</Link>
                  </h5>
                </div>
                <div className="card-footer">
                  <div
                    className="title"
                    style={{
                      fontFamily: "Times New Roman",
                      fontWeight: "bold",
                    }}
                  >
                    Rating: {course.course_rating}/5
                    {/* <span className='float-end'>Views:1234</span> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Search;
