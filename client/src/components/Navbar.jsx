import React from "react";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import NavMenu from "./NavMenu";

function Navbar(props) {
  const { width } = useWindowDimensions();
  const [isOpen, setIsOpen] = useState(false);

  //Open sidemenu
  function openHandler() {
    setIsOpen(true);
  }

  //Close sidemenu
  function closeHandler() {
    setIsOpen(false)
  }

  return (
    <>
      <nav className={`${classes.nav} ${classes[props.class]}`}>
        <div className={classes.navbar}>
          <div className={classes.logo}>
            <Link to="/">
              <img
                src={require("../images/bragilityLogo.png")}
                alt="Bragility Logo"
              />
            </Link>
          </div>
          {width >= 1080 ? (
            <ul>
              <Link className={classes.link} to="/whyBragility">
                <li>Why Bragility</li>
              </Link>
              <Link className={classes.link} to="/theSolution">
                <li>The Solution</li>
              </Link>
              <Link className={classes.link} to="/career">
                <li>Career</li>
              </Link>
              <Link className={classes.link} to="/contact">
                <li>Contact</li>
              </Link>
              <Link className={classes.link} to="/employees">
                <li>Employees</li>
              </Link>
              <Link className={classes.link} to="/faq">
                <li>FAQ</li>
              </Link>
            </ul>
          ) : (
            <div className={classes.menuButton} onClick={openHandler}>
              <span>MENU</span><AiOutlineMenu className={classes.menuIcon}/>
            </div>
          )}
        </div>
      </nav>
      <NavMenu closeHandler={closeHandler} isOpen={isOpen}/>
    </>
  );
}

export default Navbar;
