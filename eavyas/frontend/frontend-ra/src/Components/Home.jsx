import {Link} from 'react-router-dom'
import AllCourses from './AllCourses';
import { useEffect,useState } from "react"
import axios from 'axios'; 
const baseUrl = 'http://localhost:8000';


function Home() {
    const[courseData,setCourseData] =useState([]);
    const loggeduser=localStorage.getItem('loggedteacher');

    useEffect(()=>{
        try{ 
            axios.get(baseUrl+'/course/?result=4')
        .then((res)=>{
                //console.log(res.data);
                setCourseData(res.data)
        });
        }catch(error){
            console.log(error);
        }
    },[]);
    return(
        <div className="container mt-4">
            {/* {latest courses} */}
                <h3 className="pb-1 mb-4">Latest Courses <Link to = "/all-courses" className= "float-end">See All</Link></h3>
                <div className="row mb-4">
            {courseData && courseData.map((course,index)=>
            <div className="col-md-3 mb-4"key ={index}> 
          <div className="card" >
                <Link to  ={`/detail/${course.id}`}> <img src={course.thumbnail} className="card-img-top" alt={course.title}/> </Link>
              <div className="card-body">
                  <h5 className="card-title"><Link to  ={`/detail/${course.id}`}>{course.title}</Link></h5>   
              </div>
              </div>
              </div>
            )}
        </div>
            {/* {end latestCourse} */}

             {/* {popular courses} */}
             <div className="row">
                <h3 className="pb-1 my-4">Popular Courses <a href = "#" className= "float-end">See All</a></h3>
                <div className="col-md-3">
                <div className="card">
                    <img src="logo512.png" className="card-img-top" alt="course"/>
                    <div className="card-body">
                        <h5 className="card-title"><a href ="#">Course title</a></h5>   
                    </div>
                    </div>
                </div>
                <div className="col-md-3">
                <div className="card">
                    <img src="logo512.png" className="card-img-top" alt="course"/>
                    <div className="card-body">
                        <h5 className="card-title"><a href ="#">Course title</a></h5>   
                    </div>
                    </div>
                </div>
                <div className="col-md-3">
                <div className="card">
                    <img src="logo512.png" className="card-img-top" alt="course"/>
                    <div className="card-body">
                        <h5 className="card-title"><a href ="#">Course title</a></h5>   
                    </div>
                    </div>
                </div>
                <div className="col-md-3">
                <div className="card">
                    <img src="logo512.png" className="card-img-top" alt="course"/>
                    <div className="card-body">
                        <h5 className="card-title"><a href ="#">Course title</a></h5>   
                    </div>
                    </div>
                </div>
            </div>
            {/* {end popularCourse} */}

              {/* {popular teacher} */}
              <div className="row">
                <h3 className="pb-1 my-4">Popular Teachers <a href = "#" className= "float-end">See All</a> </h3>
                <div className="col-md-3">
                <div className="card">
                    <img src="logo512.png" className="card-img-top" alt="course"/>
                    <div className="card-body">
                        <h5 className="card-title"><a href ="#">Teacher name</a></h5>   
                    </div>
                    </div>
                </div>
                <div className="col-md-3">
                <div className="card">
                    <img src="logo512.png" className="card-img-top" alt="course"/>
                    <div className="card-body">
                        <h5 className="card-title"><a href ="#">Teacher name</a></h5>   
                    </div>
                    </div>
                </div>
                <div className="col-md-3">
                <div className="card">
                    <img src="logo512.png" className="card-img-top" alt="course"/>
                    <div className="card-body">
                        <h5 className="card-title"><a href ="#">Teacher name</a></h5>   
                    </div>
                    </div>
                </div>
                <div className="col-md-3">
                <div className="card">
                    <img src="logo512.png" className="card-img-top" alt="course"/>
                    <div className="card-body">
                        <h5 className="card-title"><a href ="#">Teacher name</a></h5>   
                    </div>
                    </div>
                </div>
            </div>
            {/* {end popular teacher} */}
        </div>
    );
    
}
export default Home