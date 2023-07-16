const launches = new Map();
let latestFlightNumber = 100;
const launch = {
  flightNumber: 100,
  mission: "Kepler Exploration X",
  rocket: "Explorer IS1",
  launchDate: new Date("June,19,1992"),
  target: "Kepler-442 b",
  customer: ["Ab", "NASA"],
  upcoming: true,
  sucess: true,
};
function getAllLaunches() {
  return Array.from(launches.values());
}
launches.set(launch.flightNumber, launch);
function addNewLaunch(launch) {
  latestFlightNumber++;
  launches.set(
    latestFlightNumber,
    Object.assign(launch, {
      sucess: true,
      upcoming: true,
      customer: ["NOOA", "NASA"],
      flightNumber: latestFlightNumber,
    })
  );
}
function existLaunchWithId(launchId) {
  return launches.has(launchId);
}
function AbortLaunchById(launchId) {
  const aborted = launches.get(launchId);
  aborted.upcoming = false;
  aborted.sucess = false;
  return aborted;
}
module.exports = {
  existLaunchWithId,
  getAllLaunches,
  addNewLaunch,
  AbortLaunchById,
};
