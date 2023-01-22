import React from "react";
import '../styles/App.css';
export const HotelDetail=()=>{
    return(
        <div>
            <hr/>
            <div style={{paddingBottom:"3rem", backgroundColor:"orange"}}>
                <div className="inputType">
                <label htmlFor="room" className="label">Room Type</label>
                <select >
                    <option>Single</option>
                    <option>Double</option>
                    <option>luxirous</option>
                    </select>
                    </div>
                    <div className="allHolder">
                        <div className="placehold">
                    <label htmlFor="location" className="label">CITY OR LOCATION</label>
                    <br/>
                    <input type="text" id="location" name="room" />
                    <br/>
                    </div>
                    <div className="checkin">
                    <label htmlFor="datetime" className="label">CHECK-IN</label>
                    <br/>
                    <input type="date" id="datetime" name="date" />
                    <br/>
                    </div>
                    <div className="checkout">
                    <label htmlFor="datetimeout" className="label">CHECK-OUT</label>
                    <br/>
                    <input type="date" id="date" name="datetimeout" />
                    <br/>
                    </div>
                    <div className="guest">
                    <label htmlFor="guestnumber" className="label">GUEST</label>
                    <br/>
                    <input type="number" id="guest" name="guestnumber" />
                    <br/>
                    </div>
                    <div className="submit">
                   <button id="btn">Add</button>
                    <br/>
                    </div>

                    </div>
            </div>
            <hr/>
        </div>
    )
}