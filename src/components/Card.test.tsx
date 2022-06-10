import React from "react";
import { render, screen } from "@testing-library/react";
import { Card, getIcon } from "./Card";
import { TRace } from "../utils/types";
import HORSE_RACING from "../assets/horse.png";

const mockData: TRace = {
  race_id: "16159169-094e-46ff-ab9a-20089f9c4b75",
  race_number: 8,
  meeting_name: "Mackay",
  category_id: "4a2788f8-e825-4d36-9894-efd4baf1cfae",
  advertised_start: {
    seconds: 1654756620,
  },
};

test("getSrc function", () => {
  expect(getIcon(mockData.category_id)).toEqual(HORSE_RACING);
});
test("renders  Card", () => {
  render(<Card race={mockData} />);
  const meetingName = screen.getByText(/Mackay/i);
  expect(meetingName).toBeInTheDocument();
  const raceNumber = screen.getByText(/Race 8/);
  expect(raceNumber).toBeInTheDocument();
});
