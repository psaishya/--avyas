import React from "react";

function Footer() {
  
  return (
    <footer
      className="text-muted py-5 border-top mt-auto"
      style={{ backgroundColor: "transparent", position: "block " }}
    >
      <div className="container">
        <p className="float-end mb-1">
          <a href="#">Back to top</a>
        </p>
        <div className="row">
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>
                <strong>Phone:</strong> +977-9841123123
              </li>
              <li>
                <strong>Insta:</strong>{" "}
                <a href="https://www.instagram.com/e.avyas/">@e.avyas</a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Legal</h5>
            <p>
              This is the prototype of online learning experience provide by
              e-Avyas platform
            </p>
            <p>
              Have any queries? <a href="/courses">Visit the courses </a> or
              read our <a href="https://ekantipur.com/">Latest News</a>.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
