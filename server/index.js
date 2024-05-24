const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/User");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/myDatabase");

app.post("/users", async (req, res) => {
  const { name, email } = req.body;

  const existingUser = await UserModel.findOne({ name: name, email: email });
  if (existingUser) {
    return res.status(400).json({ error: "User already exists" });
  }
  UserModel.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  UserModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("Success");
      } else {
        res.json("the password is incorrect");
      }
    }
  });
});

app.listen(3001, () => {
  console.log("server is running");
});
