import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Popup from "./../common/Popup";

describe("Popup", () => {
  test("Component renders", () => {
    render(<Popup />);
    const el = screen.getByText(/x/i);

    expect(el).toBeInTheDocument();
  });

  test("Render image", () => {
    const photoMock =
      "https://live.staticflickr.com/670/23847660585_cac34ee300_h.jpg";

    render(<Popup source={photoMock} />);
    const el = screen.getByRole("img");

    expect(el).toBeInTheDocument();
  });

  test("Clicking calls event handler once", () => {
    const handleCloseMock = jest.fn();

    render(<Popup onClose={handleCloseMock} />);
    const el = screen.getByText(/x/i);
    fireEvent.click(el);

    expect(handleCloseMock).toHaveBeenCalledTimes(1);
  });
});
