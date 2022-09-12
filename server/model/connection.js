const mongoose = require("mongoose");

const db = mongoose.connect(
  "mongodb+srv://@cluster0.b1pz3.mongodb.net/mshop?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
module.exports = db;
