import { useEffect,useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
const baseUrl = 'http://localhost:8000';

const CheckQuizStatusForStudents = (props) => {
    const[assignStatus,setassignStatus] =useState([]);
    const loggeduser=localStorage.getItem('loggedstudent');
    const[resultData,setresultData] =useState([]);

    useEffect(()=>{
        try{ 
            axios.get(baseUrl+'/fetch-quiz-attempt-status/'+ props.quiz +'/'+props.student+'/')
        .then((res)=>{
                console.log(res.data);
                setassignStatus(res.data)

        });
        }catch(error){
            console.log(error);
        }
        
        try{ 
            axios.get(baseUrl+'/fetch-quiz-result/'+ props.quiz +'/'+props.student+'/')
        .then((res)=>{
                console.log(res.data);
                setresultData(res.data)

        });
        }catch(error){
            console.log(error);
        }
        
    
    },[]);
 
  return (
   
    <td>
    {assignStatus.bool===false &&
        <Link className="btn btn-sm btn-warning" to= {`/take-quiz/`+props.quiz}>Take Quiz</Link>
    }
    {assignStatus.bool===true &&
        <div className="text-success">Attempted (Obtained Marks: {resultData.total_correct_answers}/{resultData.total_questions})</div>
    }
</td>
  )
  
}
 
export default CheckQuizStatusForStudents
