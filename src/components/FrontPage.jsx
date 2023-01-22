import React from "react";
import {Card} from "./Card";
import { useNavigate } from "react-router-dom";
export const FrontPage=()=>{
    const navBarlink=useNavigate();
    function clickbtn(){
        console.log("click");
       navBarlink('/signUp');
    }
    return(
    <div >
         <div className="headerList">
          <ul>
            <li> <h2 className="header">Booking.Com</h2></li>
            <li style={{marginLeft:"12rem"}}><h2>Home</h2></li>
            <li><h2><a href="#ourTeam" style={{textDecoration:"none" ,color:"black"}}>About Us</a></h2></li>
            <li><h2><a href="#ourContact" style={{textDecoration:"none",color:"black"}}>Contact</a></h2></li>
            <li><button onClick={clickbtn} style={{marginLeft: "12rem",border: "1px solid gold",borderRadius: "10px",backgroundColor: "rgb(0 175 0)"}} ><h3  >Sign Up</h3></button></li>
          </ul>
        </div>
        <div className="cardItems">
            <Card/>
        </div>
        <div className="about-section" id="ourTeam">
  <h1>About Us Page</h1>
  <p>Some text about who we are and what we do.</p>
  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat quo ducimus earum cupiditate eveniet dolorum, vero deleniti enim, porro vel exercitationem expedita dolor culpa reprehenderit ratione laudantium. Quibusdam officiis facilis enim hic accusamus deserunt voluptatem, adipisci tenetur porro a, nesciunt, maxime vitae ea perspiciatis incidunt reiciendis omnis facere reprehenderit. Porro magnam eius laudantium eveniet ad earum fugiat. Quidem molestiae consequatur illo? Ea eligendi in officiis.</p>
  <p>Resize the browser window to see that this page is responsive by the way.</p>
</div>


<h2 style={{textAlign:"center", background:"yellow"}} id="ourContact">Our Team</h2>
<div className="cardAlign">
<div className="column">
  <div className="row">
    <div className="card">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNWPCu429VXobaTltKgd0ZZB1l231LzeGYgA&usqp=CAU" alt="Jane" style={{width:"70%",margin:"auto"}} />
      <div className="container">
        <h2>Jane Doe</h2>
        <p className="title">CEO & Founder</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>jane@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div className="row">
    <div className="card">
      <img src="https://www.score.org/sites/default/files/styles/responsive_16_9_500w/public/AdobeStock_377091051%20C_1.jpeg?itok=TNPwe-AM" alt="Mike" style={{width:"70%",margin:"auto"}} />
      <div className="container">
        <h2>Mike Ross</h2>
        <p className="title">Art Director</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>mike@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div className="row">
    <div className="card">
      <img src="https://www.shutterstock.com/image-photo/new-business-owner-counting-revenue-260nw-289273250.jpg" alt="John" style={{width:"70%",margin:"auto"}}/>
      <div className="container">
        <h2>John Doe</h2>
        <p className="title">Designer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>john@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>
    </div>
    </div>
    </div>
)
}