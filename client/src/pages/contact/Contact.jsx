import React from "react";
import Navbar from "../../components/Navbar";
import classes from "./Contact.module.css";
import { useState } from "react";
import Axios from "axios";

function Contact() {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();

  //Posts all the data to the server which stores it in a database
  function submitHandler() {
    Axios.post("http://localhost:3001/sendMessage", {
      firstName: firstName,
      lastName: lastName,
      email: email,
      subject: subject,
      message: message,
    }).then((response) => {
      if (response.data === true) {
        alert("Message sent");
      } else {
        alert("Couldn't send message");
      }
    });
  }

  return (
    <div className={classes.contact}>
      <Navbar class="blueBackground" />
      <h1>Contact Form</h1>
      <div className={classes.contactForm}>
        <form className={classes.form} autoComplete="on" onSubmit={submitHandler}>
          <div className={classes.field}>
            <label>First Name</label>
            <input
              type="fname"
              placeholder="John"
              onChange={(event) => {
                setFirstName(event.target.value);
              }}
              required
            ></input>
          </div>
          <div className={classes.field}>
            <label>Last Name</label>
            <input
              type="lname"
              placeholder="Doe"
              onChange={(event) => {
                setLastName(event.target.value);
              }}
              required
            ></input>
          </div>
          <div className={classes.field}>
            <label>Email</label>
            <input
              type="email"
              placeholder="john.doe@example.com"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              required
            ></input>
          </div>
          <div className={classes.field}>
            <label>Subject</label>
            <input
              type="text"
              placeholder="Your subject"
              onChange={(event) => {
                setSubject(event.target.value);
              }}
              required
            ></input>
          </div>
          <div className={classes.field}>
            <label>Message</label>
            <textarea
              placeholder="Your message"
              onChange={(event) => {
                setMessage(event.target.value);
              }}
            ></textarea>
          </div>
          <button type="submit" name="button">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
