const { getAlllaunches } = require("../../model/launch.model");

function httpGetAllLaunches(req, res) {
  return res.status(200).json(getAlllaunches());
}
module.exports = { httpGetAllLaunches };
