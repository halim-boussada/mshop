const mongoose = require("mongoose");
const db = require("./connection.js");
mongoose.Promise = global.Promise;

const AdminSchema = new mongoose.Schema(
  {
    isSuper: Boolean,
    username: String,
    password: String,
    type: { type: String, default: "Admin" },
  },
  {
    timestamps: true,
  }
);

const Admin = mongoose.model("Admin", AdminSchema);

module.exports = Admin;
