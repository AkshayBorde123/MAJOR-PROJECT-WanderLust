const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 8081;
const path = require("path");
const Listing = require("./models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => console.log("connected to DB"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(MONGO_URL);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.listen(port, () => {
  console.log(`app is running on ${port}`);
});

app.get("/", (req, res) => {
  res.send("Hi,i am root");
});

// ------- sample data-----
/*
app.get("/testListing", async (req, res) => {
  let sampleListing = new Listing({
    title: "My New Villa",
    description: "By the beach",
    price: 1200,
    location: "Goa",
    country: "india",
  });

  await sampleListing.save();
  console.log("sample was saved");
  res.send("successful testing");
});
*/

app.get("/listings", async (req, res) => {
  let allListings = await Listing.find();
  res.render("index.ejs", { allListings });
});

app.get("/listings/:id", async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findById(id);
  res.render("show.ejs", { listing });
});
