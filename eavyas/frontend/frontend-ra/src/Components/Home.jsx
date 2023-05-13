import { Link } from "react-router-dom";
import AllCourses from "./AllCourses";
import { useEffect, useState } from "react";
import axios from "axios";
import backimg from "./logopng.png";
import Google from "./google-logo.webp";
import MIT from "./mit-logo.png";
import Stanford from "./stanford-logo.webp";
import Linkedin from "./linkedin-logo.png";
import IBM from "./ibm-logo.png";
import Harvard from "./harvard-logo.png";
import "./hero.css";
import Heading from "./Heading";
const baseUrl = "http://localhost:8000";

const handleChange = (event) => {
  window.location.href = "courses";
};
const handleChange2 = (event) => {
  window.location.href = "loginasstudent";
};
function Home() {
  const userLoginStatus = localStorage.getItem("userLoginStatus");

  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <Heading
              subtitle="WELCOME TO ई-Avyas"
              title="Best Online Education Expertise"
            />
            <p>
              Join us now and make the most out of the techonology in your palm.
            </p>
            <div className="button">
              {!userLoginStatus && (
                <>
                  <button className="primary-btn" onClick={handleChange2}>
                    GET STARTED NOW{" "}
                    <i className="fa fa-long-arrow-alt-right"></i>
                  </button>
                </>
              )}
              <button className="primary-btn" onClick={handleChange}>
                VIEW COURSE <i className="fa fa-long-arrow-alt-right"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="logos">
          <p>
            We offer courses recognized from various national and international
            institutions.
          </p>
          <div className="logo-images">
            <img src={Google} alt="Google logo" />
            <img src={IBM} alt="IBM logo" />
            <img src={Linkedin} alt="LinkedIn logo" />
            <img src={Stanford} alt="Stanford logo" />
            <img src={Harvard} alt="Harvard logo" />
            <img src={MIT} alt="MIT logo" />
          </div>
        </div>
      </section>

      <div className="margin"></div>
    </>
  );
}
export default Home;
