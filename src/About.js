import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/img1.svg";
import Commom from "./Commom";
const About = () => {
  return (
    <div>
      <Commom
        name="Welcome to About Page"
        imgsrc={web}
        visit="/contact"
        btname="Contact Now"
      />
    </div>
  );
};

export default About;
