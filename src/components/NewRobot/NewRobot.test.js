import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderInStore } from "../../setupTests";
import NewRobot from "./NewRobot";

describe("Given a NewRobot component", () => {
  describe("When a user selects the name label and types", () => {
    test("Then the input value should be the typed string", () => {
      const typedString = "joselito";

      renderInStore(<NewRobot />);

      const name = screen.queryByLabelText(/name/i);
      userEvent.type(name, typedString);
      const textInput = screen.queryByPlaceholderText(/robot name/i);

      expect(textInput).toHaveValue(typedString);
    });
  });

  describe("When a user selects the image label and types", () => {
    test("Then the input value should be the typed string", () => {
      const typedString = "joselito.jpg";

      renderInStore(<NewRobot />);

      const image = screen.queryByLabelText(/image url/i);
      userEvent.type(image, typedString);
      const textInput = screen.queryByPlaceholderText(/robot image/i);

      expect(textInput).toHaveValue(typedString);
    });
  });
});
