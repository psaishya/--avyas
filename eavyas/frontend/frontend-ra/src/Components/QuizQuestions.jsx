import { Link, useParams } from "react-router-dom";
import TeacherSide from "./Teacherside";
import {useState,useEffect} from 'react'
import axios from "axios";
const baseUrl = 'http://localhost:8000';
import React from 'react'

const QuizQuestions = () => {
    const [questionData,setquestionData]=useState([]);
    const [totalResult,settotalResult]=useState(0);
    const {quiz_id}=useParams();
    useEffect(()=>{
        try{
            axios.get(baseUrl+'/quiz-questions/'+quiz_id+'/')
            .then(response=>{
                settotalResult(response.data.length);
                setquestionData(response.data);
            });
        }
        catch(error){
            console.log(error);
        }

    },[]);
  return (
    <div>
      
    </div>
  )
}

export default QuizQuestions
