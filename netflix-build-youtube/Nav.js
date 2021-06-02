import React from 'react'
import "./Nav.css"
import  { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';



function Nav() {
const [show, handleShow] = useState(false);

const history = useHistory()

const transitionNavBar = () => {
    if (window.scrollY > 100){
        handleShow(true);
    }else{
        handleShow(false)
    }
} 
useEffect(() => {
   window.addEventListener("scroll", transitionNavBar);

    return () => window.removeEventListener("scroll", transitionNavBar)
        
    
}, [])
    return (
        <div className={`nav ${show && 'nav__black'}`}>
            <div className="nav__contents">
        <img 
        onClick={() => history.push("/")}
        className="nav__logo"
        src="https://pngimg.com/uploads/netflix/netflix_PNG11.png" 
        alt="" /> 
        <img 
        onClick={() => history.push("/profile")}
        className="nav__avatar"
        src="https://i.pinimg.com/originals/e2/c0/13/e2c01305f6f97417460db6a1dd82cd80.png" 
        alt="" /> 
          <h1></h1>  
          </div>
        </div>
    )
}

export default Nav
