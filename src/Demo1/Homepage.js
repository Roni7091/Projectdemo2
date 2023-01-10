import React from 'react';
import CAR from "./homepage.module.css";
import {FiPlay} from "react-icons/fi";
import {HiPlus} from "react-icons/hi";
import {GiBus} from "react-icons/gi";
import {FcAddDatabase} from "react-icons/fc";
import {NavLink} from 'react-router-dom';



const Homepage = () => {
 
  return (
    <>
    <div className={CAR.cont}>
        <div className={CAR.card}>
          <h4 className={CAR.title}>Putaway</h4> 
          <div className={CAR.putawayicon}>
            <FiPlay size={36}/>
            <HiPlus size={20}   className={CAR.plusicon}/>
            <NavLink to={"/home2"}>  <h6 className={CAR.tilebody}>Putaway</h6> </NavLink>
          </div>
        </div>
        <div className={CAR.card1}>
        <h4 className={CAR.title}>Transfer</h4>
        <div className={CAR.putawayicon}>
            <GiBus size={42}/>
            <NavLink to={"/home3"}> <h6 className={CAR.tilebody}>Transfer</h6></NavLink>
        </div>
        </div> 
        <div className={CAR.card2}>
          <h4 className={CAR.title}>Cycle Count</h4>
          <div className={CAR.putawayicon}>
            <FcAddDatabase size={36}/>
            <NavLink to={"/home4"}>  <h6 className={CAR.tilebody}>Cycle Count</h6> </NavLink>
          </div> 
        </div>

      </div>
      
         
           
    
        
    

</>
    
  )
}

export default Homepage;