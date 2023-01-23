import React from "react";
import '../styles/App.css';
import { useState } from "react";
import { HotelDetail } from './HotelDetail';
 export const AvailableHotelList=()=>{
    const [loc,setLoc]=useState("");
    const [date,setDate]=useState("");
    const [datetime,setDateTime]=useState("");
    const [geust,setGeust]=useState("");
     const [loader,setLoader]=useState(false);
    const locationF=(e)=>{
        setLoc(e.target.value);
    }
    const dateF =(e)=>{
        setDate(e.target.value);
    }
    const datetimeF =(e)=>{
        setDateTime(e.target.value);
    }
    const geustF=(e)=>{
        setGeust(e.target.value);
    }
 
    return (
        <div id="AvailableHot">
             <hr/>
            <div style={{paddingBottom:"3rem", backgroundColor:"orange"}}>
                <div className="inputType">
                <label htmlFor="room" className="label">Room Type</label>
                <select id="selectType">
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
            {loader?(<HotelDetail loc={loc} date={date} datetime={datetime} geust={geust}/> && <HotelDetail loc={loc} date={date} datetime={datetime} geust={geust}/>):""}
            {/* <div className="cardList">
                <tr>
                <th className="tableHeader">
                 HOTEL
                </th>
                <th className="tableHeader">
                 CHECK-IN
                </th>
                <th className="tableHeader">
                 PRICE
                </th>
                </tr>
               
                <tr>
                    <td className="tableData">Bushan Hotel</td>
                    <td className="tableData">12-12-1222</td>
                    <td className="tableData">1200/-</td>
                </tr>
                <tr>
                <th className="tableHeader">
                 CITY
                </th>
                <th className="tableHeader">
                 CHECK-OUT
                </th>
                <th className="tableHeader">
                 ROOMS
                </th>
                </tr>
                <tr>
                    <td className="tableData">GOA</td>
                    <td className="tableData">12-12-1222</td>
                    <td className="tableData">Double</td>
                 </tr>
                 <tr>
                <th className="tableHeader">
                 RATING
                </th>
                <th className="tableHeader">
                 
                </th>
                <th className="tableHeader">
                 GEUST
                </th>
                </tr>
                <tr>
                    <td className="tableData">9.6</td>
                    <td className="tableData"></td>
                    <td className="tableData">2</td>
                 </tr>
    
            </div>
            <div className="cardList">
                <tr>
                <th className="tableHeader">
                 HOTEL
                </th>
                <th className="tableHeader">
                 CHECK-IN
                </th>
                <th className="tableHeader">
                 PRICE
                </th>
                </tr>
               
                <tr>
                    <td className="tableData">Bushan Hotel</td>
                    <td className="tableData">12-12-1222</td>
                    <td className="tableData">1200/-</td>
                </tr>
                <tr>
                <th className="tableHeader">
                 CITY
                </th>
                <th className="tableHeader">
                 CHECK-OUT
                </th>
                <th className="tableHeader">
                 ROOMS
                </th>
                </tr>
                <tr>
                    <td className="tableData">GOA</td>
                    <td className="tableData">12-12-1222</td>
                    <td className="tableData">Double</td>
                 </tr>
                 <tr>
                <th className="tableHeader">
                 RATING
                </th>
                <th className="tableHeader">
                 
                </th>
                <th className="tableHeader">
                 GEUST
                </th>
                </tr>
                <tr>
                    <td className="tableData">9.6</td>
                    <td className="tableData"></td>
                    <td className="tableData">2</td>
                 </tr>
        
        
            </div>
            <div className="cardList">
                <tr>
                <th className="tableHeader">
                 HOTEL
                </th>
                <th className="tableHeader">
                 CHECK-IN
                </th>
                <th className="tableHeader">
                 PRICE
                </th>
                </tr>
               
                <tr>
                    <td className="tableData">Bushan Hotel</td>
                    <td className="tableData">12-12-1222</td>
                    <td className="tableData">1200/-</td>
                </tr>
                <tr>
                <th className="tableHeader">
                 CITY
                </th>
                <th className="tableHeader">
                 CHECK-OUT
                </th>
                <th className="tableHeader">
                 ROOMS
                </th>
                </tr>
                <tr>
                    <td className="tableData">GOA</td>
                    <td className="tableData">12-12-1222</td>
                    <td className="tableData">Double</td>
                 </tr>
                 <tr>
                <th className="tableHeader">
                 RATING
                </th>
                <th className="tableHeader">
                 
                </th>
                <th className="tableHeader">
                 GEUST
                </th>
                </tr>
                <tr>
                    <td className="tableData">9.6</td>
                    <td className="tableData"></td>
                    <td className="tableData">2</td>
                 </tr>
        
        
            </div>
            <div className="cardList">
                <tr>
                <th className="tableHeader">
                 HOTEL
                </th>
                <th className="tableHeader">
                 CHECK-IN
                </th>
                <th className="tableHeader">
                 PRICE
                </th>
                </tr>
               
                <tr>
                    <td className="tableData">Bushan Hotel</td>
                    <td className="tableData">12-12-1222</td>
                    <td className="tableData">1200/-</td>
                </tr>
                <tr>
                <th className="tableHeader">
                 CITY
                </th>
                <th className="tableHeader">
                 CHECK-OUT
                </th>
                <th className="tableHeader">
                 ROOMS
                </th>
                </tr>
                <tr>
                    <td className="tableData">GOA</td>
                    <td className="tableData">12-12-1222</td>
                    <td className="tableData">Double</td>
                 </tr>
                 <tr>
                <th className="tableHeader">
                 RATING
                </th>
                <th className="tableHeader">
                 
                </th>
                <th className="tableHeader">
                 GEUST
                </th>
                </tr>
                <tr>
                    <td className="tableData">9.6</td>
                    <td className="tableData"></td>
                    <td className="tableData">2</td>
                 </tr>
        
       
            </div> */}
            </div>
        </div>
    )
}