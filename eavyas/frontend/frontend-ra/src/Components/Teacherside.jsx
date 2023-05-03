import { Link } from "react-router-dom"
function TeacherSide(){
    return(
        <div className='card'>
            <div className='list-group list-group-flush'>
                <Link to ="/teacher-dashboard" className="list-group-item list-group-item-action" ><i class="bi bi-graph-up"></i>  Dashboard</Link>
                <Link  to ="/teacher-courses" className="list-group-item list-group-item-action"><i className="bi bi-journal"></i>   My courses</Link>
                <Link  to ="/add-courses" className="list-group-item list-group-item-action"><i className="bi bi-plus-square"></i>  Add Course</Link>
                {/* <Link to ="/teacher-profile" className="list-group-item list-group-item-action">Profile Settings</Link> */}
                {/* <Link  to ="/" className="list-group-item list-group-item-action">Recommended courses</Link> */}
                <Link  to ="/quiz" className="list-group-item list-group-item-action"><i class="bi bi-clipboard2-check"></i>  Quiz</Link>
                {/* <Link  to ="/add-quiz" className="list-group-item list-group-item-action">Add Quiz</Link> */}
                
           
            </div>
        </div>
    )
    }
    export default TeacherSide