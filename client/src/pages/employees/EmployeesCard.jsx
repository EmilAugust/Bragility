import React from "react";
import classes from "./Employees.module.css";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlinePhone } from "react-icons/ai";

function EmployeesCard(props) {
  return (
    <div className={classes.card}>
      <h1>{props.name}</h1>
      <a href={`mailto:${props.email}`}>
        <HiOutlineMail className={classes.icon} /> {props.email}
      </a>
      <a href={`tel:${props.phone}`}>
        <AiOutlinePhone className={classes.icon} /> {props.phone}
      </a>
      <div className={classes.bottom}>
        <label className={classes.position}>{props.department}</label>
        {props.apprentice === "true" ? (
          <label className={classes.position}>Apprentice</label>
        ) : props.departmentLeader === "true" ? (
          <label className={classes.position}>Department Leader</label>
        ) : null}
      </div>
    </div>
  );
}

export default EmployeesCard;
