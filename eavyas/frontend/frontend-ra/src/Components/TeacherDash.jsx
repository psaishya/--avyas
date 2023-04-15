import {Link} from 'react-router-dom'
import TeacherSide from './Teacherside';

function TeacherDash(){
    return(
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                   <TeacherSide />
                </aside>
                <section className="col-md-9">
                        Dashboard
                </section>    
            </div>
        </div>
    )
}

export default TeacherDash;