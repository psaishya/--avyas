import { Link } from "react-router-dom";

function Sidebar() {
  const cardStyle = {
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
    transition: "transform 0.3s",
    border: "1px solid #ADD8E6",
  };

  const linkStyle = {
    color: "#000",
    transition: "color 0.3s",
  };

  const hoverCardStyle = {
    transform: "scale(1.1)",
    boxShadow: "0 8px 16px 0 rgba(0, 0, 0, 0.2)",
    border: "1px solid #87CEEB",
  };

  const hoverLinkStyle = {
    color: "#87CEEB",
  };

  return (
    <div
      className="card"
      style={cardStyle}
      onMouseOver={() => {
        this.style = hoverCardStyle;
      }}
      onMouseOut={() => {
        this.style = cardStyle;
      }}
    >
      <div className="list-group list-group-flush">
        <Link
          to="/student-dashboard"
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
          to="/my-courses"
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
          to="/favourite-courses"
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
          <i className="bi bi-heart"></i> Favorite courses
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
