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

//Get employees
app.get("/getEmployees", (req, res) => {
  db.query(
    "SELECT * FROM employees",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

//Send message
app.post("/sendMessage", (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const subject = req.body.subject;
  const message = req.body.message;

  let messageSent = false

  db.query(
    "INSERT INTO messages (firstName, lastName, email, subject, message) VALUES (?,?,?,?,?)",
    [firstName, lastName, email, subject, message],
    (err, result) => {
      if (err) {
        console.log(err);
        messageSent = false
      } else {
        messageSent = true
      }
      res.send(messageSent);
    }
  );
});

//Starts server
app.listen(3001, () => {
  console.log("Your server is running on port 3001");
});
