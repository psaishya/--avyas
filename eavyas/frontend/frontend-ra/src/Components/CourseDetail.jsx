import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
// const baseUrl = 'http://localhost:8000';
const siteUrl = 'http://127.0.0.1:8000/'


function CourseDetail() {
    const [chapterData, setChapterData] = useState([]);
    const [courseData, setCourseData] = useState([]);
    const [teacherData, setteacherData] = useState([]);
    const [relatedCourseData, setrelatedCourseData] = useState([]);
    let { course_id } = useParams();

    // const loggeduser=localStorage.getItem('loggedteacher');
    const loggedstudentId = localStorage.getItem('loggedstudent');
    const [userLoginStatus, setuserLoginStatus] = useState("");
    const [enrollStatus, setenrollStatus] = useState("");
    const [ratingStatus, setratingStatus] = useState("");
    const [AvgRating, setAvgRating] = useState(0);


    useEffect(() => {
        // fetch-course
        try {
            axios.get('http://localhost:8000/course/' + course_id + '/')
                .then((res) => {

                    console.log(res.data);
                    setCourseData(res.data)
                    setteacherData(res.data.teacher)
                    setChapterData(res.data.course_chapters)
                    setrelatedCourseData(JSON.parse(res.data.related_videos))
                    if(res.data.course_rating != '' && res.data.course_rating != null){
                        setAvgRating(res.data.course_rating)
                    }
                    
                });
        } catch (error) {
            console.log(error);
        }

        // fetch enroll status
        try {
            axios.get('http://localhost:8000/fetch-enroll-status/' + loggedstudentId + '/' + course_id + '/')
                .then((res) => {
                    if (res.data.bool === true) {
                        setenrollStatus('success');
                    }
                    else { setenrollStatus('failure'); }
                    // setenrollStatus(res.data.bool)
                    // console.log(res);
                    // setenrollStatus('success');
                });

        }
        catch (error) {
            console.log(error);
        }

        const userLoginStatus = localStorage.getItem('userLoginStatus');

        if (userLoginStatus === 'true') {
            setuserLoginStatus('success');
        }

    }, [course_id, loggedstudentId]);

    // fetch rating status
    try {
        axios.get('http://localhost:8000/fetch-rating-status/' + loggedstudentId + '/' + course_id + '/')
            .then((res) => {
                if (res.data.bool === true) {
                    setratingStatus('success');
                }
                else { setratingStatus('failure'); }

            });

    }
    catch (error) {
        console.log(error);
    }

    // enroll

    const enrollCourse = () => {
        const loggedstudent_id = localStorage.getItem('loggedstudent');
        const _formData = new FormData();
        _formData.append('course', course_id);
        _formData.append('student', loggedstudent_id);


        try {
            axios.post('http://localhost:8000/student-enroll-course/', _formData)
                .then((res) => {
                    console.log(res.data);
                    // window.location.href='add-courses';
                });
        } catch (error) {
            console.log(error);
        }
    }



    // for video
    const [isOpen, setIsOpen] = useState(false);

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleShow = () => {
        setIsOpen(true);
    };

    //for ratings
    const [ratingData, setratingData] = useState({
        rating: '',
        review: '',
    });

    const handleChange = (event) => {
        setratingData({
            ...ratingData,
            [event.target.name]: event.target.value
        });

    }

    const formSubmit = () => {

        const _formData = new FormData();

        _formData.append('course', course_id);
        _formData.append('student', loggedstudentId);
        _formData.append('rating', ratingData.rating);
        _formData.append('reviews', ratingData.review);
        try {
            axios.post('http://127.0.0.1:8000/course-rating/', _formData)
                .then((res) => {
                    window.location.reload();
                });
        } catch (error) {
            console.log(error);
        }

    };

    return (
        <div className="container mt-3" >

            <div className="row">
                <div className="col-4">
                    <img src={courseData.thumbnail} className="img-thumbnail" alt={courseData.title} />
                </div>
                <div className="col-8">
                    <h2 className='fw-bold'>{courseData.title}</h2>
                    <p> {courseData.description}</p>
                    <p className='fw-bold'>Course By: <Link to="/teacher-detail/1">{teacherData.firstName} {teacherData.lastName}</Link></p>
                    <p className='fw-bold'>Course Duration: 3 Hours 30 minutes</p>
                    <p className='fw-bold'>Students Enrolled  {courseData.total_enrolled_students}  students</p>

                    <p className='fw-bold'>Ratings: {AvgRating}/5
                        {enrollStatus === "success" && userLoginStatus === "success" &&
                            <>
                                {ratingStatus !== "success" &&
                                    <button className='btn btn-success btn-sm ms-2' data-bs-toggle="modal" data-bs-target="#ratingModal">Rating</button>
                                }
                                {ratingStatus === "success" &&
                                    <small className='badge bg-info text-dark ms-2'>You have already rated this course </small>
                                }


                                <div className="modal fade" id="ratingModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-lg">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h1 className="modal-title fs-5" id="exampleModalLabel">Rate for {courseData.title}</h1>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <form>
                                                    <div class="mb-3">
                                                        <label for="exampleInputEmail1" class="form-label" >Rating</label>
                                                        <select onChange={(event) => handleChange(event)} className="form-control" name="rating">
                                                            <option onChange={(event) => handleChange(event)} value="1" name="rating">1</option>
                                                            <option onChange={(event) => handleChange(event)} value="2" name="rating">2</option>
                                                            <option onChange={(event) => handleChange(event)} value="3" name="rating">3</option>
                                                            <option onChange={(event) => handleChange(event)} value="4" name="rating">4</option>
                                                            <option onChange={(event) => handleChange(event)} value="5" name="rating">5</option>
                                                        </select>

                                                    </div>
                                                    <div class="mb-3">
                                                        <label for="exampleInputPassword1" class="form-label">Review</label>
                                                        <textarea onChange={(event) => handleChange(event)} className="form-control" name="review" rows="10"></textarea>

                                                    </div>
                                                    <button onClick={formSubmit} type="button" class="btn btn-primary">Submit</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        }
                    </p>
                    {enrollStatus === "success" && userLoginStatus === "success" && <p><span>You are aleady enrolled in this course</span></p>}
                    {userLoginStatus === "success" && enrollStatus !== "success" && <p><button onClick={enrollCourse} type="button" className='btn btn-success'>Enroll in this course</button> </p>}
                    {userLoginStatus !== "success" && <p><Link to='/loginasstudent'>Please login to enroll in this course</Link></p>}


                </div>

            </div>
            {/*Course_videos*/}
            {enrollStatus === "success" && userLoginStatus === "success" &&
                <div className='card mt-4'>
                    <h5 className="card-header">
                        Course Videos
                    </h5>
                    {chapterData.map((chapter, index) =>
                        <ul key={index} className="list-group list-group-flush">


                            <li className="list-group-item">{chapter.title}<button className='btn btn-sm btn-danger float-end' data-bs-toggle="modal" data-bs-target="#videoModal1"><i className="bi bi-play" onClick={handleShow}></i></button > </li>
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
                                                    <iframe src={chapter.video} title={chapter.title} allowFullScreen></iframe>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            )}


                            {/* end modal video */}

                        </ul>
                    )}

                </div>
            }
            <h3 className="pb-1 mb-4 mt-5">Related Courses</h3>
            <div className='row mb-4'>
                {relatedCourseData.map((rcourse, index) =>
                    <div key={index} className="col-md-3">
                        <div className="card">
                            <Link target="__blank" to={`/detail/${rcourse.pk}`}> <img src={`${siteUrl}media/${rcourse.fields.thumbnail}`} className="card-img-top" alt={rcourse.fields.title} /> </Link>
                            <div className="card-body">
                                <h5 className="card-title"><Link to={`/detail/${rcourse.pk}`}>{rcourse.fields.title}</Link></h5>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>

    );
}

export default CourseDetail;