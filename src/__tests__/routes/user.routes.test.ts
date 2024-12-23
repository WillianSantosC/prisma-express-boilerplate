import request from "supertest";

import app from "../../app";

describe("User routes", () => {
  test("Get one User", async () => {
    const res = await request(app).get("/user/1");
    expect(res.body).toEqual("Hello world");
  });
});
