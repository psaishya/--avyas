import { Link } from "react-router-dom"
function TeacherSide(){
    return(
        <div className='card'>
            <div className='list-group list-group-flush'>
                <Link to ="/teacher-dashboard" className="list-group-item list-group-item-action" >Dashboard</Link>
                <Link  to ="/teacher-courses" className="list-group-item list-group-item-action">My courses</Link>
                <Link  to ="/add-courses" className="list-group-item list-group-item-action">Add Course</Link>
                <Link to ="/teacher-profile" className="list-group-item list-group-item-action">Profile Settings</Link>
                <Link  to ="/" className="list-group-item list-group-item-action">Recommended courses</Link>
            </div>
        </div>
    )
    }
    export default TeacherSide