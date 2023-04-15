import { Link } from "react-router-dom"
function Sidebar(){
    return(
        <div className='card'>
            <div className='list-group list-group-flush'>
            <Link to ="/student-dashboard" className="list-group-item list-group-item-action" >Dashboard</Link>
                <Link  to ="/my-courses" className="list-group-item list-group-item-action">My courses</Link>
                <Link  to ="/" className="list-group-item list-group-item-action">Favorite courses</Link>
                <Link to ="/student-profile" className="list-group-item list-group-item-action">Profile Settings</Link>
                <Link  to ="/" className="list-group-item list-group-item-action">Recommended courses</Link>
            </div>
        </div>
    )
    }
    export default Sidebar