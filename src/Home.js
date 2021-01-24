import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/Logo.svg";
import Commom from "./Commom";

const Home = () => {
  return (
    <div>
      <Commom
        name="Grow your business with"
        imgsrc={web}
        visit="/services"
        btname="Get Started"
      />
    </div>
  );
};

export default Home;
