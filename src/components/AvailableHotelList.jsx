import React from "react";
import '../styles/App.css';
import { useState } from "react";
import { HotelDetail } from './HotelDetail';
import { BookInfo } from "./BookInfo";
 export const AvailableHotelList=()=>{
    const [loc,setLoc]=useState("");
    const [date,setDate]=useState("");
    const [datetime,setDateTime]=useState("");
    const [geust,setGeust]=useState("");
    const [room,setRoom]=useState(1);
     const [loader,setLoader]=useState(false);
    const locationF=(e)=>{
        setLoc(e.target.value);
    }
    const dateF =(e)=>{
        setDate(e.target.value);
    }
    const datetimeF =(e)=>{
        setDateTime(e.target.value);
        console.log("datetome");
    }
    const geustF=(e)=>{
        setGeust(e.target.value);
    }
 
    const selectF=(e)=>{
        setRoom(e.target.value);
    }
    return (
        <div id="AvailableHot">
             <hr/>
            <div style={{paddingBottom:"3rem", backgroundColor:"orange"}}>
                <div className="inputType">
                <label htmlFor="room" className="label">Room Type</label>
                <select id="selectType" onChange={selectF}>
                    <option>Single</option>
                    <option>Double</option>
                    <option>luxirous</option>
                    </select>
                    </div>
                    <div className="allHolder">
                        <div className="placehold">
                    <label htmlFor="location" className="label">CITY OR LOCATION</label>
                    <br/>
                    <input type="text" id="location" name="room" onChange={locationF}/>
                    <br/>
                    </div>
                    <div className="checkin">
                    <label htmlFor="datetime" className="label">CHECK-IN</label>
                    <br/>
                    <input type="date" id="datetime" name="date" onChange={dateF}/>
                    <br/>
                    </div>
                    <div className="checkout">
                    <label htmlFor="datetimeout" className="label">CHECK-OUT</label>
                    <br/>
                    <input type="date" id="date" name="datetimeout" onChange={datetimeF}/>
                    <br/>
                    </div>
                    <div className="guest">
                    <label htmlFor="guestnumber" className="label">GUEST</label>
                    <br/>
                    <input type="number" id="guest" name="guestnumber" onChange={geustF}/>
                    <br/>
                    </div>
                    <div className="submit">
                   <button id="btn" onClick={()=>{
                        setLoader(!loader);
                   }}>Add</button>
                    <br/>
                    </div>

                    </div>
            </div>
            <hr/>
            <h1 className="title">Available Hotels</h1>
            <div className="container1"> 
            {loader?(<HotelDetail loc={loc} date={date} datetime={datetime} geust={geust} selectRoom={room}/>):""}
            </div><BookInfo loc={loc} date={date}/>
          
        </div>
    )
}