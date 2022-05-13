import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import classes from "./Employees.module.css";
import axios from "axios";
import { useState } from "react";
import EmployeesCard from "./EmployeesCard";

function Employees() {
  const [employeesData, setEmployeesData] = useState([]);

  //When component mounts, it will get all the employees from the server which gets it from a database.
  useEffect(() => {
    const employees = {
      method: "GET",
      url: "http://localhost:3001/getEmployees",
    };
    axios.request(employees).then((response) => {
      setEmployeesData(info => {
        return info.concat(response.data);
      })
    });
  }, []);
  return (
    <div>
      <Navbar class="blueBackground" />
      <h1 className={classes.employeesHeader}>Employees</h1>
      <div className={classes.container}>
        {employeesData && employeesData.map(data => {
          const result = data.department.replace(/([A-Z])/g, " $1");
          const finalResult = result.charAt(0).toUpperCase() + result.slice(1);
          return <EmployeesCard key={data.id} name={data.name} email={data.email} phone={data.phone} department={finalResult} apprentice={data.apprentice} departmentLeader={data.departmentLeader}/>
        })}
      </div>
    </div>
  );
}

export default Employees;
