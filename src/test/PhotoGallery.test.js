import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import PhotoGallery from "./../common/PhotoGallery";

describe("Photo Gallery", () => {
  test("Render image", () => {
    const photoMock = [
      "https://live.staticflickr.com/670/23847660585_cac34ee300_h.jpg",
    ];

    render(<PhotoGallery photos={photoMock} />);
    const el = screen.getByRole("img");

    expect(el).toBeInTheDocument();
  });

  test("Clicking calls event handler once", () => {
    const handleZoomMock = jest.fn();
    const photoMock = [
      "https://live.staticflickr.com/670/23847660585_cac34ee300_h.jpg",
    ];

    render(<PhotoGallery photos={photoMock} onZoom={handleZoomMock} />);
    const el = screen.getByRole("img");

    fireEvent.click(el);

    expect(handleZoomMock).toHaveBeenCalledTimes(1);
  });
});
