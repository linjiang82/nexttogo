import { convertTime } from "./convertTime";

test("convertTime function", () => {
  expect(convertTime(Date.now() / 1000)).toEqual("0s");
  expect(convertTime(Date.now() / 1000 + 300)).toEqual("5m");
  expect(convertTime(Date.now() / 1000 + 260)).toEqual("4m 20s");
});
