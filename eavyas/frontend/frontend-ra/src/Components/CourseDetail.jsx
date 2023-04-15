import React from 'react';
import {useParams} from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function CourseDetail(){
    let {course_id} = useParams();
    const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleShow = () => {
    setIsOpen(true);
  };

    return (
        <div className="container mt-3" >
            <div className="row">
                <div className="col-4">
                <img src="/logo512.png" className="img-thumbnail" alt="course"/>
                </div>
                <div className="col-8">
                    <h3>Course Title</h3>
                    <p> Course description</p>
                    <p className='fw-bold'>Course By: <Link to="/teacher-detail/1"> Teacher 1</Link></p>
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
            <li className="list-group-item">Introduction<button className='btn btn-sm btn-danger float-end' data-bs-toggle="modal" data-bs-target="#videoModal1"><i className="bi bi-play" onClick={handleShow}></i></button > </li>
            {/* <!-- Modal --> */}

            {isOpen && (
                <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-modal="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Video 1</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleClose}></button>
                    </div>
                    <div className="modal-body">
                        <div className="ratio ratio-16x9">
                        <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video" allowFullScreen></iframe>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            )}
    
                {/* end modal video */}
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