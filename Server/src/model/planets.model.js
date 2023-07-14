const { parse } = require("csv-parse");
const fs = require("fs");
const path = require("path");
const habitablePlanet = [];
function isHabitablePlanet(planet) {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.33 &&
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6
  );
}
function loadPlanetsData() {
  return new Promise((resolve, reject) => {
    fs.createReadStream(path.join(__dirname, "..", "data", "kepler_data.csv"))
      .pipe(
        parse({
          comment: "#",
          columns: true,
        })
      )
      .on("data", (data) => {
        if (isHabitablePlanet(data)) {
          habitablePlanet.push(data);
        }
      })
      .on("error", (err) => {
        reject(err);
        console.log(err);
      })
      .on("end", () => {
        console.log(`${habitablePlanet.length} habitablePlanet Found`);
        resolve();
      });
  });
}
function getAllPlanets() {
  return resizeBy.status(200).json(habitablePlanet);
}

module.exports = {
  loadPlanetsData,
  getAllPlanets,
};
