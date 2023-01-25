import React from "react";
import { useNavigate} from "react-router-dom";
import { useState} from "react";

export const SignUpPage=()=>{
  const [state,setState]=useState("");
  const [pass,setPass]=useState("");
  const [passC,setCPass]=useState("");
  const navigateToprojectBody=useNavigate();
 function onemailinput(e){
 setState(e.target.value);
  }
  function onpassinput(e){
    setPass(e.target.value);
     }
     function onpassCinput(e){
      setCPass(e.target.value);
       }

  function onClickbtn(){
    // if(state.length!=0 && pass.value.length()!=0 && pass==passC){
      if(state.length!=0){
      navigateToprojectBody('/home');
    }

  }
    return(
      <div style={{backgroundColor:"GrayText",height:"40rem"}}>
        <div className="headerList">
          <ul>
            <li> <h2 className="header">Booking.Com</h2></li>
            <li id="liHome" style={{marginLeft:"12rem"}}><h2>Home</h2></li>
            <li id="liAbout"><h2><a href="#ourTeam" style={{textDecoration:"none" ,color:"black"}}>About Us</a></h2></li>
            <li id="liContact"><h2><a href="#ourContact" style={{textDecoration:"none",color:"black"}}>Contact</a></h2></li>
          </ul>
        </div>
        <div className="dropdown-menu">
  <form className="px-4 py-3" method="get">
  <div className="form-group">
      <label htmlFor="name">User Name</label>
      <input type="email" className="form-control" id="name" placeholder="enter your name"  required/>
    </div>
    <div className="form-group">
      <label htmlFor="email">Email Address</label>
      <input type="email" className="form-control" id="email" placeholder="email@example.com" onChange={onemailinput} required/>
    </div>
    <div className="form-group">
      <label htmlFor="password">Password</label>
      <input type="password" className="form-control" id="password" placeholder="Enter Password" onChange={onpassinput}
      required/>
    </div>
    <div className="form-group">
      <label htmlFor="passwordc">Cofirm Password</label>
      <input type="password" className="form-control" id="passwordc" placeholder="Confirm Password" onChange={onpassCinput} required/>
    </div>
    
    <button type="submit" className="btn" onClick={onClickbtn}>Sign in</button>
  </form>
 
</div>
</div>
)
}