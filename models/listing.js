const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    type: String,
    set: (v) =>
      v === ""
        ? "https://thumbs.dreamstime.com/b/splendid-sunny-day-gorgeous-meadow-near-vestrahorn-mountaine-stokksnes-cape-iceland-location-stokksnes-cape-vestrahorn-159853222.jpg"
        : v,
  },
  price: Number,
  location: String,
  country: String,
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;
