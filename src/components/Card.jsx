import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
const images = [
    { url: "https://www.shutterstock.com/image-illustration/hotel-sign-stars-3d-illustration-260nw-195879770.jpg" },
    { url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWx8ZW58MHx8MHx8&w=1000&q=80" },
    { url: "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=" },
    { url: "https://www.shutterstock.com/image-photo/luxury-hotel-infinity-pool-palms-260nw-648165631.jpg" },
    { url: "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWxzfGVufDB8fDB8fA%3D%3D&w=1000&q=80" },
    { url: "https://media.istockphoto.com/id/1347300967/photo/airplane-toy-with-passports-and-money-on-black-background-top-view-air-trip-and-vacation.jpg?b=1&s=170667a&w=0&k=20&c=U1dT9T9yvlmgdmXgQzZd1JFVhbfDxEERonBc5l8GEqY=" },
    { url: "https://imgmedia.lbb.in/media/2019/07/5d4158d33e1ba8795b284d5b_1564563667233.jpg" },
  ];
  
  export const Card = () => {
    return (
      <div>
        <SimpleImageSlider
          width={896}
          height={504}
          images={images}
          showBullets={true}
          showNavs={true}
        />
      </div>
    );
  }