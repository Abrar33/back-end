const request = require("supertest");
const app = require("../../app");
describe("Test GET/launches", () => {
  test("should response with 200 sucess ", async () => {
    const response = await request(app)
      .get("/launches")
      .expect("Content-Type", /json/)
      .expect(200);
  });
});

describe("Test POST/launches", () => {
  const completeLaunchData = {
    mission: "USS Enterprise",
    rocket: "NCC 1701-D",
    target: "Kepler-186 f",
    launchDate: "January,26,2030",
  };
  const launchDataWithoutDate = {
    mission: "USS Enterprise",
    rocket: "NCC 1701-D",
    target: "Kepler-186 f",
  };
  const launchInvalidDate = {
    mission: "US Enterprise",
    rocket: "NCC 1701-D",
    target: "Kepler-186 f",
    launchDate: "toti",
  };
  test("should respond with 201 created ", async () => {
    const response = await request(app)
      .post("/launches")
      .send(completeLaunchData)
      .expect("Content-Type", /json/)
      .expect(201);
    const requestDate = new Date(completeLaunchData.launchDate).valueOf();
    const responseDate = new Date(response.body.launchDate).valueOf();
    expect(responseDate).toBe(requestDate);
    expect(response.body).toMatchObject(launchDataWithoutDate);
  });
  test("should catch missing required property ", async () => {
    const response = await request(app)
      .post("/launches")
      .send(launchDataWithoutDate)
      .expect("Content-Type", /json/)
      .expect(400);
  });
  test("It should catch invalid dates ", async () => {
    const response = await request(app)
      .post("/launches")
      .send(launchInvalidDate)
      .expect("Content-Type", /json/)
      .expect(400);
  });
});
