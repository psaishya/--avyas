import React from "react";

function Footer() {
  return (
    <footer
      className="text-muted py-5 border-top mt-auto"
      style={{ backgroundColor: "transparent" }}
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
                <a href="#">Home</a>
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
              Album example is © Bootstrap, but please download and customize it
              for yourself!
            </p>
            <p>
              New to Bootstrap?{" "}
              <a href="https://getbootstrap.com/docs/5.0/getting-started/introduction/">
                Visit the homepage
              </a>{" "}
              or read our{" "}
              <a href="https://getbootstrap.com/docs/5.0/getting-started/introduction/">
                getting started guide
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
