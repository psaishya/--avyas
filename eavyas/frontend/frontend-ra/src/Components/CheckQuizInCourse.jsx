import { useEffect,useState } from "react"
import axios from "axios"
const baseUrl = 'http://localhost:8000';

const CheckQuizInCourse = (props) => {
    const[quizData,setquizData] =useState([]);
    const loggeduser=localStorage.getItem('loggedteacher');

    useEffect(()=>{
        try{ 
            axios.get(baseUrl+'/fetch-quiz-assign-status/'+ props.quiz +'/'+props.course+'/')
        .then((res)=>{
                console.log(res.data);
                setquizData(res.data)

        });
        }catch(error){
            console.log(error);
        }
        
        
    },[]);
    const  assignQuiz=(quiz_id)=>{
            const _formData=new FormData();
            _formData.append('teacher',loggeduser);
            _formData.append('course',props.course);
            _formData.append('quiz',props.quiz);
    
            try{
                axios.post(baseUrl+'/quiz-assign-course/',_formData,{
                    headers:{
                        'content-type':'multipart/form-data'
                }}).then((res)=>
                {
                    console.log('quiz succssfully assigned to course');
                    window.location.reload();
                });
            }
            catch(error){
                console.log(error);
            }
    console.log("handle delete");
        }
  return (
   
    <td>     
    {quizData.bool===false &&

    <button type="submit"
    onClick={() => assignQuiz(props.quiz)}
     className="btn btn-success btn-sm ms-2">Assign Quiz</button>
    }
    
    {quizData.bool===true &&
    <span className="text-success">Assigned</span>
    }
</td>

  )
  
}

export default CheckQuizInCourse
