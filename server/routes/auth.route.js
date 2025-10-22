const { loginWithGoogle } = require("../controllers/auth.controller");

const authRoute = require("express").Router();

authRoute.get("/login/google", loginWithGoogle);

module.exports = authRoute;
