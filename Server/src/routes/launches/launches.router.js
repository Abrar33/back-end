const { getAllLaunches } = require("./launches.controller");

const express = require("express");
const launchesRouter = express.Router();
launchesRouter.get("/launches", getAllLaunches);
module.exports = {
  launchesRouter,
};
