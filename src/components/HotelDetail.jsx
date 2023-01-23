import React from "react";
import '../styles/App.css';
import { useNavigate } from "react-router-dom";
export const HotelDetail=({loc,date,datetime,geust})=>{
    const navigating=useNavigate();
    const clickBook=()=>{
      navigating('/book');
    }
    return(
        <div>
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
                    <td className="tableData">{date}</td>
                    <td className="tableData">1200/-(per day)</td>
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
                    <td className="tableData">{loc}</td>
                    <td className="tableData">{datetime}</td>
                    <td className="tableData"></td>
                 </tr>
                 <tr>
                <th className="tableHeader">
                 RATING
                </th>
                <th className="tableHeader">
                 GEUST
                </th>
                <th className="tableHeader">
                <button id="Bookbtn" onClick={clickBook}>Book</button>
                </th>
               
                </tr>
                <tr>
                    <td className="tableData">8.8</td>
                    <td className="tableData">{geust}</td>
                    <td className="tableData"></td>
                 </tr>
               
            </div>
            <br></br>
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
                    <td className="tableData">Brand Hotel</td>
                    <td className="tableData">{date}</td>
                    <td className="tableData">1500/-(per day)</td>
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
                    <td className="tableData">{loc}</td>
                    <td className="tableData">{datetime}</td>
                    <td className="tableData"></td>
                 </tr>
                 <tr>
                <th className="tableHeader">
                 RATING
                </th>
                <th className="tableHeader">
                 GEUST
                </th>
                <th className="tableHeader">
                <button id="Bookbtn" onClick={clickBook}>Book</button>
                </th>
               
                </tr>
                <tr>
                    <td className="tableData">9.2</td>
                    <td className="tableData">{geust}</td>
                    <td className="tableData"></td>
                 </tr>
               
            </div>
            <br></br>
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
                    <td className="tableData">uddam Hotel</td>
                    <td className="tableData">{date}</td>
                    <td className="tableData">1600/-(per day)</td>
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
                    <td className="tableData">{loc}</td>
                    <td className="tableData">{datetime}</td>
                    <td className="tableData"></td>
                 </tr>
                 <tr>
                <th className="tableHeader">
                 RATING
                </th>
                <th className="tableHeader">
                 GEUST
                </th>
                <th className="tableHeader">
                <button id="Bookbtn" onClick={clickBook}>Book</button>
                </th>
               
                </tr>
                <tr>
                    <td className="tableData">9.3</td>
                    <td className="tableData">{geust}</td>
                    <td className="tableData"></td>
                 </tr>
               
            </div>
            <br></br>
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
                    <td className="tableData">lolilla Hotel</td>
                    <td className="tableData">{date}</td>
                    <td className="tableData">2200/-(per day)</td>
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
                    <td className="tableData">{loc}</td>
                    <td className="tableData">{datetime}</td>
                    <td className="tableData"></td>
                 </tr>
                 <tr>
                <th className="tableHeader">
                 RATING
                </th>
                <th className="tableHeader">
                 GEUST
                </th>
                <th className="tableHeader">
                <button id="Bookbtn" onClick={clickBook}>Book</button>
                </th>
               
                </tr>
                <tr>
                    <td className="tableData">9.5</td>
                    <td className="tableData">{geust}</td>
                    <td className="tableData"></td>
                 </tr>
               
            </div>
            <br></br>
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
                    <td className="tableData">madeira Hotel</td>
                    <td className="tableData">{date}</td>
                    <td className="tableData">1800/-</td>
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
                    <td className="tableData">{loc}</td>
                    <td className="tableData">{datetime}</td>
                    <td className="tableData"></td>
                 </tr>
                 <tr>
                <th className="tableHeader">
                 RATING
                </th>
                <th className="tableHeader">
                 GEUST
                </th>
                <th className="tableHeader">
                <button id="Bookbtn" onClick={clickBook}>Book</button>
                </th>
               
                </tr>
                <tr>
                    <td className="tableData">9.5</td>
                    <td className="tableData">{geust}</td>
                    <td className="tableData"></td>
                 </tr>
               
            </div>
           
        </div>
    )
}