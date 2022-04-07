import React from 'react'
import classes from './NavMenu.module.css'
import { Link } from 'react-router-dom'
import {IoArrowForwardCircleOutline} from 'react-icons/io5'

function NavMenu(props) {

  return (
    <div className={props.isOpen === true ? `${classes.container} ${classes.menuOpened}` : classes.container}>
      <IoArrowForwardCircleOutline className={classes.close} onClick={props.closeHandler}/>
      <div className={classes.menu}>
        <ul>
          <Link className={classes.link} to="/">
            <li>Home</li>
          </Link>
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
      </div>
    </div>
  )
}

export default NavMenu