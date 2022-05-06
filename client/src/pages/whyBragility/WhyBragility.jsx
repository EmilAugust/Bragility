import React from "react";
import Navbar from "../../components/Navbar";
import classes from "./WhyBragility.module.css";
import { IoIosArrowDown } from "react-icons/io";

function WhyBragility() {
  return (
    <div>
      <div className={classes.background} alt={"Background image of a city"}>
        <Navbar />
        <div className={classes.header}>
          <div className={classes.headerContainer}>
            <h1>A foundation for digitization of core business</h1>
            <p>
              Bragility operates as a catalyst for digitization and enables
              companies to realize their digital ambitions
            </p>
          </div>
        </div>
        <div className={classes.front}>
          <a href="#aboutBragility" className={classes.arrowDown}>
            <IoIosArrowDown />
          </a>
        </div>
      </div>
      <div className={classes.content}>
        <div className={classes.aboutBragility} id="aboutBragility">
          <h1>Why Bragility</h1>
          <p>
            Bragility's platform service puts the user at the center and includes
            a modern, secure and fully managed digital workplace, delivered as a
            service. Digitization imposes ever greater demands on companies’ IT
            platforms. A modern, secure and well-functioning IT environment is a
            prerequisite for digitization of both the digital workplace and
            companies’ own core business.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhyBragility;
