const express = require("express");
const route = express.Router();
const ctl = require("../controllers/ctl");

route.get("/",ctl.firstPage);

module.exports = route;