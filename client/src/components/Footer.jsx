import React from 'react'
import classes from './Footer.module.css'
import { FaInstagram, FaFacebookF, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={`${classes.row} ${classes.socials}`}>
        <a href="https://www.instagram.com/intility/"><FaInstagram/></a>
        <a href="https://www.facebook.com/Intility/"><FaFacebookF/></a>
        <a href="https://www.linkedin.com/company/intility-as"><FaLinkedin/></a>
      </div>
      <div className={`${classes.row} ${classes.sites}`}>
        <ul>
          <Link className={classes.link} to="/whyBragility"><li>Why Bragility</li></Link>
          <Link className={classes.link} to="/theSolution"><li>The Solution</li></Link>
          <Link className={classes.link} to="/career"><li>Career</li></Link>
          <Link className={classes.link} to="/contact"><li>Contact</li></Link>
          <Link className={classes.link} to="/employees"><li>Employees</li></Link>
          <Link className={classes.link} to="/faq"><li>FAQ</li></Link>
        </ul>
      </div>
      <div className={`${classes.row} ${classes.contact}`}>
        <p>Schweigaards gate 39, 0191 Oslo</p>
        <p>+47 24 10 33 00</p>
      </div>
      <p className={classes.copyright}>
        Bragility &#169; 2022
      </p>
    </footer>
  )
}

export default Footer