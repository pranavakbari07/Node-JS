const express = require("express");
const route = express.Router();
const ctl = require("../controllers/ctl");
const passport = require("../middlewares/localst");

route.get("/", ctl.login);
route.post("/login", passport.authenticate("localSt",{failureRedirect:"/"}) ,ctl.loginAdmin)
route.get("/logout", ctl.logout)

route.get("/dashbord", passport.checkAuth,ctl.dashbord);

route.get("/addAdmin",passport.checkAuth, ctl.addAdmin);
route.post("/addAdmin",passport.checkAuth, ctl.addAdminData); 

route.get("/viewAdmin",passport.checkAuth, ctl.viewAdmin);

route.get("/editData",passport.checkAuth, ctl.editData);
route.post("/updateData", passport.checkAuth, ctl.updateData)
route.get("/deleteData", passport.checkAuth, ctl.deleteData);

module.exports = route;
