const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const { query } = require("express");

app.use(cors());
app.use(express.json());

//Creates connection to database and stores it in a variable.
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "bragility",
});

//Gets employees from MySQL database. Takes in reqest and response as arguments. Request isn't used becasue no information from the frontend is passed in. Response is used to send all the employee data back to the frontend.
app.get("/getEmployees", (req, res) => {
  db.query("SELECT * FROM employees", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

//Send message. Takes in request and response as parameters. Request is the form data that the user inputted, and response is used to send a response back.
app.post("/sendMessage", (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const subject = req.body.subject;
  const message = req.body.message;

  let messageSent = false;

  //Saves data in MySQL database
  db.query(
    "INSERT INTO messages (firstName, lastName, email, subject, message) VALUES (?,?,?,?,?)",
    [firstName, lastName, email, subject, message],
    (err, result) => {
      if (err) {
        console.log(err);
        messageSent = false;
      } else {
        messageSent = true;
      }
      res.send(messageSent);
    }
  );
});

//Starts server
app.listen(3001, () => {
  console.log("Your server is running on port 3001");
});
