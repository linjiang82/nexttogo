import { act, render, screen } from "@testing-library/react";
import App from "./App";

test("renders app", async () => {
  await act(async () => {
    render(<App />);
  });
  const cards = await screen.findAllByTestId("card");
  expect(cards.length).toEqual(5);
});
