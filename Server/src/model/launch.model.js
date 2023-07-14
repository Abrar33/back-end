const launches = new Map();
const launch = {
  flightNumber: 100,
  mission: "Kepler Exploration X",
  rocket: "Explorer IS1",
  launchDate: new Date("June,19,1992"),
  destination: "Kepler-442 b",
  customer: ["Ab", "NASA"],
  upcoming: true,
  sucess: true,
};
function getAllLaunches() {
  return Array.from(launches.values());
}
launches.set(launch.flightNumber, launch);
module.exports = { getAllLaunches };
