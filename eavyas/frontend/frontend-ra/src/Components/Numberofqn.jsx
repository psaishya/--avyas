import React from 'react';
import axios from "axios";
import {useState,useEffect} from 'react';

const baseUrl = 'http://localhost:8000';


const Numberofqn = (props) => {
    const [totalQuestion,settotalQuestion]=useState(0);
    const quiz_id=props.quiz;
    useEffect(()=>{
            try{
                axios.get(baseUrl+'/quiz-questions/'+quiz_id+'/')
                .then(response=>{
                    settotalQuestion(response.data.length);
                }); 
            }                                    
    
            catch(error){
                console.log(error);
            }
        
    
        
    },[]);
    
    
  return (
   <td>{totalQuestion}</td> 

  )
}

export default Numberofqn
