import { useEffect,useState } from "react"
import {Link} from 'react-router-dom'
import axios from "axios"
const baseUrl = 'http://localhost:8000';

const QuizResult = (props) => {
    const[resultData,setresultData] =useState([]);

    useEffect(()=>{
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
    <div className="modal-dialog ">
        <div className="modal-content">
        <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">Quiz Result</h1>
            <button type="button"  className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>    
        <div className="modal-body">
            <table>
                <tr>
                    <td>Total Questions  </td>
                    <td>{resultData.total_questions}</td>
                </tr>
                <tr>
                    <td>Attempted Questions  </td>
                    <td>{resultData.total_attempted_questions}</td>
                </tr>
                <tr>
                    <td>Correct Answers  </td>
                    <td>{resultData.total_correct_answers}</td>
                </tr>
            </table>
            
        </div>
        </div>
    </div>
</td>

  )
  
}

export default QuizResult
