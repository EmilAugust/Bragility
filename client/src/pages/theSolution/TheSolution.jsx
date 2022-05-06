import React from "react";
import Navbar from "../../components/Navbar";
import classes from "./TheSolution.module.css";
import { IoIosArrowDown } from "react-icons/io";

function TheSolution() {
  return (
    <div>
      <div className={classes.background} alt={"Background image of a Oslo"}>
        <Navbar />
        <div className={classes.header}>
          <div className={classes.headerContainer}>
            <h1>An industrialized IT platform, delivered as a service</h1>
            <p>
              Bragility includes an end-to-end operations and support service:
              from local infrastructure and clients to business-critical systems
              and cloud services
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
          <h1>The Solution</h1>
          <p>
            An industrialized approach to platform, service and application
            monitoring ensures end-to-end visibility throughout the value chain.
            Bragility's monitoring platform is continuously updated with new
            functionality, which enables Bragility to identify and handle error
            situations before they affect end users or service quality. Bragility
            is the Single Point of Contact for all types of error situations and
            performs error handling in collaboration with system owners and
            service providers as an included part of the service.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TheSolution;
