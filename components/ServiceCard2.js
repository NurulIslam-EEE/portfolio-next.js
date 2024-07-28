import React from "react";
import { Tilt } from "react-tilt";

function ServiceCard2({ index, title, icon, description }) {
  const services = [
    {
      title: "Frontend Developer",
      icon: "assets/creator.png",
      details: "",
    },
    {
      title: "Backend Developer",
      icon: "assets/backend.png",
      details: "",
    },
    {
      title: "React Native Developer",
      icon: "assets/mobile.png",
      details: "",
    },
    {
      title: "Responsive Design",
      icon: "assets/web.png",
      details: "",
    },
  ];
  return (
    <Tilt className="workbox">
      {/* <div className="workbox"> */}
      <div className="icon">
        <img src={icon} alt="" className="w-16 h-16 object-contain mb-4" />
      </div>
      <div className="desc">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      {/* </div> */}
    </Tilt>
  );
}

export default ServiceCard2;
