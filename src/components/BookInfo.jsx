import React from "react";

export const BookInfo=({loc,date})=>{
    return(
        <div style={{backgroundColor:"skyblue"}}>
            <div id="slider">
            Congratulations your Booking is Comfirmed....!
            <div>{loc}{date}</div>
            
            </div>

        </div>
    )
}