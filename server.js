//use  express
const express = require("express");
const app = express();
//const router = express.Router();

//include middleare that understands JSON
app.use(express.json());

const users = [];

//POST request to the /register route
//asynchronous request and response?
app.post("/register", (req, res) => {
  //if you usse asycn you MUST use await??
  const newUser = req.body;

  if (newUser.userName && newUser.userEmail) {
    users.push(newUser); //create??
    res.status(201).json({ message: "User succesfully registered!" });
  } else {
    res.status(400).json({ message: "Missing data, cannot register" });
  }
});

//GET request to the /users route
//asynchronous request and response
app.get("/users", (req, res) => {
  if (users.length > 0) {
    res.status(200).json(users);
  } else {
    res.status(400).json({ message: "No courses found" });
  }
});

app.listen(3000, () => console.log("Server running on port 3000!"));
