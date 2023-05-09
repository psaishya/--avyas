import {Link} from 'react-router-dom'
import AllCourses from './AllCourses';
import { useEffect,useState } from "react"
import axios from 'axios';
import BackgroundImage from "./background.jpg";
import  './Home.css';
const baseUrl = 'http://localhost:8000';



function Home() {
        
    return(
        <div className="main">
           <div className='background-blur'></div>
        <div className="content">
        <h1 className='main-header'>Online Learning Platform</h1>
            
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt neque 
                 expedita atque eveniet <br/> quis nesciunt. Quos nulla vero consequuntur, fugit nemo ad delectus 
                <br/> a quae totam ipsa illum minus laudantium?</p>

                <button className="cn"><a href="#">JOIN US</a></button>
                </div>
        </div>
    )
    
}
export default Home