const Schema = require("../model/schema")

module.exports.login = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const admin = await Schema.findOne({ email: email });
    if (!admin) {
      return res.json({ message: "User not found", auth: false });
    }
    if (admin.password != password) {
      return res.json({ message: "Invalid password", auth: false });
    }
    res.json({ message: "Login successful", auth: true });
  } catch (err) {
    res.status(500).json({ message: "Server error", auth: false });
  }
};

module.exports.addData = async (req, res) => {
  try {
    const data = await Schema.create(req.body);
    res.json({ msg: "Data added successfully..!", data });
  } catch (err) {
    res.status(500).json({ msg: "Error adding data" });
  }
};
module.exports.getData = async (req, res) => {
  try {
    const data = await Schema.find({});
    res.json({ data });
  } catch (err) {
    res.status(500).json({ data: [], msg: "Error fetching data" });
  }
};
module.exports.deleteData = async (req, res) => {
  try {
    const data = await Schema.findByIdAndDelete(req.query.id);
    res.json({ msg: "Data deleted successfully...!", data });
  } catch (err) {
    res.status(500).json({ msg: "Error deleting data" });
  }
};
module.exports.updateData = async (req, res) => {
  try {
    const data = await Schema.findByIdAndUpdate(req.body._id, req.body);
    res.json({ msg: "Data updated successfully...!", data });
  } catch (err) {
    res.status(500).json({ msg: "Error updating data" });
  }
};
module.exports.logout = (req, res) => {
  res.json({ message: "Logged out successfully", auth: false });
};