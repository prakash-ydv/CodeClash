const ProblemRoute = require("express").Router();

const { runCode } = require("../controllers/problem.controller");

ProblemRoute.post("/run", runCode);

module.exports = ProblemRoute;
