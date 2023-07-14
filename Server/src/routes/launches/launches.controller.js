const { getAllLaunches } = require("../../model/launch.model");

function httpGetAllLaunches(req, res) {
  return res.status(200).json(getAllLaunches());
}
module.exports = { httpGetAllLaunches };
