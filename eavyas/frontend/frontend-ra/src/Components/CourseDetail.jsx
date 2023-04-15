import React from 'react';
import {useParams} from 'react-router-dom';
import { Link } from 'react-router-dom';

function CourseDetail(){
    let {course_id} = useParams();
    return (
        <div className="container mt-3" >
            <div className="row">
                <div className="col-4">
                <img src="/logo512.png" className="img-thumbnail" alt="course"/>
                </div>
                <div className="col-8">
                    <h3>Course Title</h3>
                    <p> Course description</p>
                    <p className='fw-bold'>Course By: <a href="#"> Teacher 1</a></p>
                    <p className='fw-bold'>Course Duration: 3 Hours 30 minutes</p>
                    <p className='fw-bold'>Students Enrolled 400 students</p>
                    <p className='fw-bold'>Ratings: 4/5</p>
                </div>
                               
        </div>
     {/*Course_videos*/}
        <div className='card mt-4'>
        <h5 className="card-header">
               Course Videos
            </h5>
        <ul className="list-group list-group-flush">
            <li className="list-group-item">Introduction<button className='btn btn-sm btn-danger float-end'><i className="bi bi-play"></i></button> </li>
            <li className="list-group-item">Introduction<button className='btn btn-sm btn-danger float-end'><i className="bi bi-play"></i></button> </li>
            <li className="list-group-item">Introduction<button className='btn btn-sm btn-danger float-end'><i className="bi bi-play"></i></button> </li>
            <li className="list-group-item">Introduction<button className='btn btn-sm btn-danger float-end'><i className="bi bi-play"></i></button> </li>
            <li className="list-group-item">Introduction<button className='btn btn-sm btn-danger float-end'><i className="bi bi-play"></i></button> </li>
        </ul>

        </div>
        <h3 className="pb-1 mb-4 mt-5">Related Courses</h3>
        <div className='row mb-4'>
            <div className="col-md-3">
                <div className="card">
                    <Link to  ="/detail/1"> <img src="/logo512.png" className="card-img-top" alt="course"/> </Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to  ="/detail/1">Course title</Link></h5>   
                </div>
            </div>
                    </div>
            <div className="col-md-3">
                <div className="card">
                        <img src="/logo512.png" className="card-img-top" alt="course"/>
                        <div className="card-body">
                            <h5 className="card-title"><a href ="#">Course title</a></h5>   
                    </div>
                 </div>
            </div>
            </div>
    </div>

    );
}

export default CourseDetail;