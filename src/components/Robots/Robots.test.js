import { render, screen, within } from "@testing-library/react";
import { renderInStore } from "../../setupTests";
import Robots from "./Robots";

describe("Given a Robots component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a list of robots", () => {
      renderInStore(<Robots robots={[]} />);

      const robotsList = screen.queryByRole("list", { name: "robots" });

      expect(robotsList).toBeInTheDocument();
    });
  });

  describe("When it's renedered with two robots", () => {
    test("Then it should show two robots", () => {
      const robots = [
        {
          name: "Robotin",
          img: "https://i.pinimg.com/564x/d5/fe/07/d5fe075620b54caa6786aec6242fde9c.jpg",
          stats: {
            speed: 8,
            resistance: 4,
            date: 2,
          },
          id: 1,
        },
        {
          name: "Joselito",
          img: "https://i.pinimg.com/564x/18/57/7a/18577af226ae7088c5e8e5a9eef14631.jpg",
          stats: {
            speed: 1,
            resistance: 10,
            date: 3,
          },
          id: 2,
        },
      ];
      const expectedLenght = 2;

      renderInStore(<Robots robots={robots} />);
      const robotsList = screen.getByRole("list", { name: "robots" });
      const { getAllByRole } = within(robotsList);
      const robotsListItems = getAllByRole("listitem");

      expect(robotsListItems.length).toBe(expectedLenght);
    });
  });
});
