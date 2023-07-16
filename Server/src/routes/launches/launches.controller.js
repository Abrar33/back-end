const {
  getAllLaunches,
  addNewLaunch,
  existLaunchWithId,
  AbortLaunchById,
} = require("../../model/launch.model");

function httpGetAllLaunches(req, res) {
  return res.status(200).json(getAllLaunches());
}
function httpAddNewLaunch(req, res) {
  const launch = req.body;
  if (
    !launch.mission ||
    !launch.rocket ||
    !launch.mission ||
    !launch.launchDate ||
    !launch.target
  ) {
    return res.status(400).json({
      error: "Missing required property",
    });
  }
  launch.launchDate = new Date(launch.launchDate);
  if (isNaN(launch.launchDate)) {
    return res.status(400).json({
      error: "Invalid Launch Date",
    });
  }
  addNewLaunch(launch);
  return res.status(201).json(launch);
}
function httpAbortLaunch(req, res) {
  const launchId = Number(req.params.id);
  if (!existLaunchWithId(launchId)) {
    return res.status(200).json({
      error: "launch not found",
    });
  }
  const aborted = AbortLaunchById(launchId);
  return res.status(200).json(aborted);
}
module.exports = { httpGetAllLaunches, httpAddNewLaunch, httpAbortLaunch };
