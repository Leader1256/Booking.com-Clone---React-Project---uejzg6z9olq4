import React from "react";
import {FaUser} from 'react-icons/fa';
import '../styles/App.css';

export const NavHeader=()=>{
    return <div className="mainHeader">
            <div>
            <h1 className="header">Booking.Com</h1>
          </div>
            <div className="flight">
            Stay Flight 
            <div className="userName">
            <p className="user"><FaUser/> Raghav </p>
            </div>
            <div/>
         </div>
         </div>
        
            
}