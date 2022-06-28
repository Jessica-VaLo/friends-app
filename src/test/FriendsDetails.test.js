import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import FriendsDetails from "./../component/FriendsDetails";

describe("Friends Details", () => {
  test("Checking renderization of its childrens", async () => {
    const friendMock = {
      first_name: "Jeremy",
      last_name: "Davis",
      phone: "54321",
    };
    const photoMock = [
      "https://live.staticflickr.com/670/23847660585_cac34ee300_h.jpg",
    ];

    render(<FriendsDetails friend={friendMock} photos={photoMock} />);
    const friendProfile = screen.getByText(/Jeremy/i);
    const tabs = screen.getByText(/Photo/i);
    const info = screen.getByText(/Phone/i);

    expect(friendProfile).toBeInTheDocument();
    expect(tabs).toBeInTheDocument();
    expect(info).toBeInTheDocument();

    fireEvent.click(tabs);
    const photo = await screen.findByAltText(/gallery/i);
    expect(photo).toBeInTheDocument();

    fireEvent.click(photo);
    const close = await screen.findByText(/x/i);
    expect(close).toBeInTheDocument();

    fireEvent.click(close);
    await waitFor(() => {
      expect(screen.queryByText(/x/i)).not.toBeInTheDocument();
    });
  });

  test("Checking event handler is called once", () => {
    const friendMock = {};
    const photoMock = [];
    const onGoBackMock = jest.fn();

    render(
      <FriendsDetails
        friend={friendMock}
        photos={photoMock}
        onGoBack={onGoBackMock}
      />
    );

    const goBack = screen.getByTitle("go back");
    fireEvent.click(goBack);

    expect(onGoBackMock).toHaveBeenCalledTimes(1);
  });
});
