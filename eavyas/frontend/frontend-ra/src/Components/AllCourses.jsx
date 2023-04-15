import { Link } from "react-router-dom"
import { useEffect,useState } from "react"
import axios from 'axios'; 
function AllCourses(){
    return(
        
        <div className="container mt-3" >
          <div className="row">
          <h3 className="pb-1 mb-4">Latest Courses</h3>
          <div className="col-md-3  mb-4">
          <div className="card">
          <Link to  ="/detail/1"> <img src="logo512.png" className="card-img-top" alt="course"/> </Link>
              <div className="card-body">
                  <h5 className="card-title"><Link to  ="/detail/1">Course title</Link></h5>   
              </div>
              </div>
          </div>
          <div className="col-md-3 mb-4">
          <div className="card">
              <img src="logo512.png" className="card-img-top" alt="course"/>
              <div className="card-body">
                  <h5 className="card-title"><a href ="#">Course title</a></h5>   
              </div>
              </div>
          </div>
          <div className="col-md-3 mb-4">
          <div className="card">
              <img src="logo512.png" className="card-img-top" alt="course"/>
              <div className="card-body">
                  <h5 className="card-title"><a href ="#">Course title</a></h5>   
              </div>
              </div>
          </div>
          <div className="col-md-3 mb-4">
          <div className="card">
              <img src="logo512.png" className="card-img-top" alt="course"/>
              <div className="card-body">
                  <h5 className="card-title"><a href ="#">Course title</a></h5>   
              </div>
              </div>
          </div>
      </div>
      </div>
    )
 }
 export default AllCourses