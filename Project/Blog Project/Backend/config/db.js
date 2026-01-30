const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1/ReactAdminData")

const db = mongoose.connection;

db.once("open", () => {
  console.log("Database connected successfully");
});
db.on("error", (err) => {
  console.log("Database connection error:", err);
});

module.exports = db;