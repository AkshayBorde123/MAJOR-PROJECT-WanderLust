const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 8081;

mongoose.connect("mongodb://127.0.0.1:27017/");

app.listen(port, () => {
  console.log(`app is running on ${port}`);
});

app.get("/", (req, res) => {
  res.send("Hi,i am root");
});
