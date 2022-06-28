import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import DetailsPhotos from "./../component/DetailsPhotos";

describe("Details Photos", () => {
  test("Checking renderization of its childrens", async () => {
    const photoMock = [
      "https://live.staticflickr.com/670/23847660585_cac34ee300_h.jpg",
    ];

    render(<DetailsPhotos photos={photoMock} />);
    const el = screen.getByRole("img");

    expect(el).toBeInTheDocument();
    fireEvent.click(el);

    const el1 = await screen.findByText(/x/i);

    expect(el1).toBeInTheDocument();
    fireEvent.click(el1);

    await waitFor(() => {
      expect(screen.queryByText(/x/i)).not.toBeInTheDocument();
    });
  });
});
