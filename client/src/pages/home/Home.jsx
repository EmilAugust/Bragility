import React from "react";
import Navbar from "../../components/Navbar";
import classes from "./Home.module.css";
import { IoIosArrowDown } from "react-icons/io";

function Home() {
  return (
    <div className={classes.home}  alt={"Background image of mountains"}>
      <div className={classes.background}>
        <Navbar/>
        <div className={classes.header}>
          <div className={classes.headerContainer}>
            <h1>A complete platform service for multi-cloud IT environments</h1>
            <p>
              Bragility is a fully managed platform service currently used by more
              than 600 companies across 2000 locations in Norway and the rest of
              the world
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
          <h1>About Bragility</h1>
          <p>
            Bragility is a company with 161 employees, which offers various
            solutions within IT in the Norwegian market. The company offers full
            operation of the IT systems to smaller companies, with server
            solutions, web solutions and service. They also offer service to
            private customers.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
