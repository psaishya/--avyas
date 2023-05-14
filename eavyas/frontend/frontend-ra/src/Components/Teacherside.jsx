import { Link } from "react-router-dom";

function TeacherSide() {
  return (
    <div className="card">
      <div className="list-group list-group-flush">
        <Link
          to="/teacher-dashboard"
          className="list-group-item list-group-item-action"
          style={{
            transition: "all .2s ease-in-out",
            boxShadow: "0 2px 4px rgba(0,0,0,.2)",
            fontFamily: "Times New Roman",
            fontSize: "20px",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "lightblue";
            e.currentTarget.parentElement.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "initial";
            e.currentTarget.parentElement.style.transform = "scale(1)";
          }}
        >
          <i className="bi bi-graph-up"></i> Dashboard
        </Link>
        <Link
          to="/teacher-courses"
          className="list-group-item list-group-item-action"
          style={{
            transition: "all .2s ease-in-out",
            boxShadow: "0 2px 4px rgba(0,0,0,.2)",
            fontFamily: "Times New Roman",
            fontSize: "20px",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "lightblue";
            e.currentTarget.parentElement.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "initial";
            e.currentTarget.parentElement.style.transform = "scale(1)";
          }}
        >
          <i className="bi bi-journal"></i> My courses
        </Link>
        <Link
          to="/add-courses"
          className="list-group-item list-group-item-action"
          style={{
            transition: "all .2s ease-in-out",
            boxShadow: "0 2px 4px rgba(0,0,0,.2)",
            fontFamily: "Times New Roman",
            fontSize: "20px",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "lightblue";
            e.currentTarget.parentElement.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "initial";
            e.currentTarget.parentElement.style.transform = "scale(1)";
          }}
        >
          <i className="bi bi-plus-square"></i> Add Course
        </Link>
        <Link
          to="/quiz"
          className="list-group-item list-group-item-action"
          style={{
            transition: "all .2s ease-in-out",
            boxShadow: "0 2px 4px rgba(0,0,0,.2)",
            fontFamily: "Times New Roman",
            fontSize: "20px",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "lightblue";
            e.currentTarget.parentElement.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "initial";
            e.currentTarget.parentElement.style.transform = "scale(1)";
          }}
        >
          <i className="bi bi-clipboard2-check"></i> Quiz
        </Link>
      </div>
    </div>
  );
}

export default TeacherSide;
