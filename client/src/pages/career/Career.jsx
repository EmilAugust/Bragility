import React from "react";
import Navbar from "../../components/Navbar";
import classes from "./Career.module.css";

function Career() {
  return (
    <div>
      <Navbar class="blueBackground" />
      <div className={classes.container}>
        <h1 className={classes.careerHeader}>Career</h1>
        <h2>Open Positions</h2>
        <p className={classes.about}>
          Please keep in mind all our positions require a fluent understanding
          of Norwegian or another Scandinavian language
        </p>
      </div>
        <div className={classes.cards}>
          <div className={classes.card}>
            <h1>Devloper</h1>
            <p>
              We will strengthen Intility within a number of different
              technologies and languages throughout the development stack, and
              are now looking for more developers who are passionate about
              technology and love to program. As a developer in Intility, you
              will enter a strong professional environment and work closely with
              the rest of the development teams and you will build tomorrow's
              cloud services.
            </p>
          </div>
          <div className={classes.card}>
            <h1>Devloper</h1>
            <p>
              We will strengthen Intility within a number of different
              technologies and languages throughout the development stack, and
              are now looking for more developers who are passionate about
              technology and love to program. As a developer in Intility, you
              will enter a strong professional environment and work closely with
              the rest of the development teams and you will build tomorrow's
              cloud services.
            </p>
          </div>
        </div>
    </div>
  );
}

export default Career;
