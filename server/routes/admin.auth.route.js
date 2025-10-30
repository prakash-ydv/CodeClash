const adminRoute = require("express").Router();
const {
  createAdmin,
  loginAdmin,
} = require("../controllers/admin.auth.controller");

adminRoute.post("/create", createAdmin);
adminRoute.post("/login", loginAdmin);

module.exports = adminRoute;
