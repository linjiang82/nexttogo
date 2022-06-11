import { fetchData } from "./fetchData";
import { ENDPOINT } from "./constants";

test("fetchData should return error if passing an incorrect url", () => {
  return fetchData("https://notexisting.com").then((res) => {
    expect(res).toBeDefined();
    expect(res.error).toContain("Something went wrong");
  });
});
test("fetchData should return correct data", () => {
  return fetchData(ENDPOINT).then((res) => {
    expect(res).toBeDefined();
    expect(res.data.next_to_go_ids.length).toEqual(10);
  });
});
