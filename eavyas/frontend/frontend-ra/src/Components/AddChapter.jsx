import { Link } from "react-router-dom";
import TeacherSide from "./Teacherside";

function AddChapter(){
    return(
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <TeacherSide/>
                </aside>
                <div className="col-9">
                    <div className="card">
                        <h5 className="card-header">Add Chapter</h5>
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="title" className="from-label">Course Title</label>
                                    <input type="text" id="title" className="form-control" placeholder="Course Title"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <textarea className="form-control" id="description"></textarea>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="video" className="from-label">Video</label>
                                    <input type="file" id="video" className="form-control"/>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default AddChapter