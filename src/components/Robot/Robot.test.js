import { render, screen } from "@testing-library/react";
import { renderInStore } from "../../setupTests";
import Robot from "./Robot";

describe("Given a Robot Component", () => {
  describe("When it's rendered", () => {
    test("Then it should show the name passed in the robot object as a heading", () => {
      const name = "robotin";
      const robot = { name, stats: {} };

      renderInStore(<Robot robot={robot} />);
      const robotName = screen.queryByRole("heading", { name });

      expect(robotName).toBeInTheDocument();
    });

    test("Then it should show an image with alt text equal to the name passed", () => {
      const name = "joselui";
      const robot = { name, stats: {} };

      renderInStore(<Robot robot={robot} />);
      const image = screen.queryByRole("img", { name });

      expect(image).toBeInTheDocument();
    });

    test("Then it should render the list of stats provided", () => {
      const robot = { name: "", stats: { speed: 2, resistance: 3, date: 4 } };

      renderInStore(<Robot robot={robot} />);
      const stats = screen.getByRole("list", { name: "stats" });
      const speed = screen.getByText(`Speed: ${robot.stats.speed}`);

      expect(stats).toBeInTheDocument();
      expect(speed).toBeInTheDocument();
    });
  });
});
