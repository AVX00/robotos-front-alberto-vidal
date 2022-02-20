import { fireEvent, screen, waitFor } from "@testing-library/react";
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

  describe("When some inputs are empty", () => {
    test("Then the submit button should be disabled", () => {
      const typedString = "joselito";

      renderInStore(<NewRobot />);
      const name = screen.queryByLabelText(/robot name/i);
      userEvent.type(name, typedString);
      const button = screen.queryByRole("button", { name: /create/i });

      expect(button).toBeDisabled();
    });
  });

  describe("When all inputs are filled", () => {
    test("Then the submit button shouldn't be disabled", async () => {
      const typedString = "joselito";

      renderInStore(<NewRobot />);
      const name = screen.queryByLabelText(/robot name/i);
      const image = screen.queryByLabelText(/image url/i);
      const speed = screen.queryByLabelText(/speed/i);
      const resistance = screen.queryByLabelText(/resistance/i);
      const date = screen.queryByLabelText(/fabrication date/i);
      userEvent.type(name, typedString);
      userEvent.type(image, typedString);
      userEvent.selectOptions(speed, "4");
      userEvent.selectOptions(resistance, "4");
      fireEvent.change(date, {
        target: { value: "2020-01-15" },
      });
      const button = screen.getByRole("button", { name: /create/i });

      await waitFor(() => expect(button).not.toBeDisabled());
    });
  });
});
