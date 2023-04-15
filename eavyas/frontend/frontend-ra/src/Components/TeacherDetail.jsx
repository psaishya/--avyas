import {useParams} from 'react-router-dom';
import { Link } from 'react-router-dom';

function TeacherDetail(){
    return(
        <div className="container mt-3" >
        <div className="row">
            <div className="col-4">
            <img src="/logo512.png" className="img-thumbnail" alt="Teacher image"/>
            </div>
            <div className="col-8">
                <h3>Austin Texas</h3>
                <p> Teacher Description</p>
                <p className='fw-bold'>Skills: <Link to="/teacher-detail/1"> Python</Link>,<Link to="/teacher-detail/1"> Java</Link></p>
                <p className='fw-bold'>Recent Courses: <Link to="/teacher-detail/1"> Django</Link></p>
                <p className='fw-bold'>Ratings: 4/5</p>
            </div>
                           
    </div>
 {/*Course_videos*/}
    <div className='card mt-4'>
    <h5 className="card-header">
           Course List
        </h5>
    <div className="list-group list-group-flush">
       <Link to="/detail/1" className='list-group-item list-group-item-action'>Django</Link>
    </div>

    </div>
   
</div>
    );
}

export default TeacherDetail