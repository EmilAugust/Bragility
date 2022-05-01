import React from "react";
import Navbar from "../../components/Navbar";
import classes from "./Career.module.css";
import developer from "../../images/developer.jpeg";
import support from "../../images/support.jpeg";
import operation from "../../images/operation.png";
import marketing from "../../images/marketing.webp";
import hrAndAdmin from "../../images/hrAndAdmin.jpeg";
import apprenticeship from "../../images/apprenticeship.jpeg";
import openApplication from "../../images/openApplication.jpeg";

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
          <div
            className={classes.cardImage}
            style={{ backgroundImage: `url(${developer})` }}
            alt={"Developer"}
          ></div>
          <div className={classes.cardContent}>
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

        <div className={classes.card}>
          <div
            className={classes.cardImage}
            style={{ backgroundImage: `url(${support})` }}
            alt={"Support"}
          ></div>
          <div className={classes.cardContent}>
            <h1>Support</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex ab a
              architecto, animi dolore accusantium officia incidunt. Alias
              laborum corrupti reprehenderit, vero vel debitis dicta, tenetur
              accusamus mollitia ea reiciendis illum at obcaecati magni eligendi
              ex possimus voluptatem sed. Velit quae maxime sint obcaecati, esse
              explicabo earum delectus quaerat impedit pariatur odio iste
              corporis officia quibusdam aut! Quis, qui sequi?
            </p>
          </div>
        </div>

        <div className={classes.card}>
          <div
            className={classes.cardImage}
            style={{ backgroundImage: `url(${operation})` }}
            alt={"Operation"}
          ></div>
          <div className={classes.cardContent}>
            <h1>Operation</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex ab a
              architecto, animi dolore accusantium officia incidunt. Alias
              laborum corrupti reprehenderit, vero vel debitis dicta, tenetur
              accusamus mollitia ea reiciendis illum at obcaecati magni eligendi
              ex possimus voluptatem sed. Velit quae maxime sint obcaecati, esse
              explicabo earum delectus quaerat impedit pariatur odio iste
              corporis officia quibusdam aut! Quis, qui sequi?
            </p>
          </div>
        </div>

        <div className={classes.card}>
          <div
            className={classes.cardImage}
            style={{ backgroundImage: `url(${marketing})` }}
            alt={"Marketing"}
          ></div>
          <div className={classes.cardContent}>
            <h1>Marketing</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex ab a
              architecto, animi dolore accusantium officia incidunt. Alias
              laborum corrupti reprehenderit, vero vel debitis dicta, tenetur
              accusamus mollitia ea reiciendis illum at obcaecati magni eligendi
              ex possimus voluptatem sed. Velit quae maxime sint obcaecati, esse
              explicabo earum delectus quaerat impedit pariatur odio iste
              corporis officia quibusdam aut! Quis, qui sequi?
            </p>
          </div>
        </div>

        <div className={classes.card}>
          <div
            className={classes.cardImage}
            style={{ backgroundImage: `url(${hrAndAdmin})` }}
            alt={"HR and Administration"}
          ></div>
          <div className={classes.cardContent}>
            <h1>HR & Administration</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex ab a
              architecto, animi dolore accusantium officia incidunt. Alias
              laborum corrupti reprehenderit, vero vel debitis dicta, tenetur
              accusamus mollitia ea reiciendis illum at obcaecati magni eligendi
              ex possimus voluptatem sed. Velit quae maxime sint obcaecati, esse
              explicabo earum delectus quaerat impedit pariatur odio iste
              corporis officia quibusdam aut! Quis, qui sequi?
            </p>
          </div>
        </div>

        <div className={classes.card}>
          <div
            className={classes.cardImage}
            style={{ backgroundImage: `url(${apprenticeship})` }}
            alt={"Apprenticeship"}
          ></div>
          <div className={classes.cardContent}>
            <h1>Apprenticeship</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex ab a
              architecto, animi dolore accusantium officia incidunt. Alias
              laborum corrupti reprehenderit, vero vel debitis dicta, tenetur
              accusamus mollitia ea reiciendis illum at obcaecati magni eligendi
              ex possimus voluptatem sed. Velit quae maxime sint obcaecati, esse
              explicabo earum delectus quaerat impedit pariatur odio iste
              corporis officia quibusdam aut! Quis, qui sequi?
            </p>
          </div>
        </div>

        <div className={classes.card}>
          <div
            className={classes.cardImage}
            style={{ backgroundImage: `url(${openApplication})` }}
            alt={"Open Application"}
          ></div>
          <div className={classes.cardContent}>
            <h1>Open Application</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex ab a
              architecto, animi dolore accusantium officia incidunt. Alias
              laborum corrupti reprehenderit, vero vel debitis dicta, tenetur
              accusamus mollitia ea reiciendis illum at obcaecati magni eligendi
              ex possimus voluptatem sed. Velit quae maxime sint obcaecati, esse
              explicabo earum delectus quaerat impedit pariatur odio iste
              corporis officia quibusdam aut! Quis, qui sequi?
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Career;
