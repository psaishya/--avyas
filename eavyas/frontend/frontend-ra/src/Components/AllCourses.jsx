import { Link } from "react-router-dom"
import { useEffect,useState } from "react"
import axios from 'axios'; 
const baseUrl = 'http://localhost:8000';

  
function AllCourses(){
    const[courseData,setCourseData] =useState([]);
    const loggeduser=localStorage.getItem('loggedteacher');

    useEffect(()=>{
        try{ 
            axios.get(baseUrl+'/course/')
        .then((res)=>{
                //console.log(res.data);
                setCourseData(res.data)
        });
        }catch(error){
            console.log(error);
        }
    },[]);
    return(  
        <div className="container mt-3" >   
          <h3 className="pb-1 mb-4">Latest Courses</h3>
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
      </div>
    )
 }
 export default AllCourses