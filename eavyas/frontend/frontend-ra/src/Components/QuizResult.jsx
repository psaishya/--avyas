import { useEffect,useState } from "react"
import {Link} from 'react-router-dom'
import axios from "axios"
const baseUrl = 'http://localhost:8000';

const QuizResult = (props) => {
    const[resultData,setresultData] =useState([]);
    const[resultData1,setresultData1] =useState([]);

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
        try{ 
            axios.get(baseUrl+'/each-attempted-quiz/'+ props.quiz +'/'+props.student+'/')
        .then((res)=>{
                console.log(res.data);
                setresultData1(res.data)

        });
        }catch(error){
            console.log(error);
        }
      
        
    },[]);
    
  return (
   
    <td>
        <div className="modal-content">
        
        <div className="modal-body">
            <table>
                <tr>
                    <td>Total Questions  </td>
                    <td>{resultData.total_questions}</td>
                </tr>
                <tr>
                    <td>Attempted Questions  </td>
                    <td>{resultData1.length}</td>
                </tr>
                <tr>
                    <td>Correct Answers  </td>
                    <td>{resultData.total_correct_answers}</td>
                </tr>
            </table>
            
        </div>
        </div>
</td>

  )
  
}

export default QuizResult
