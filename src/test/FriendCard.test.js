import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import FriendCard from "./../component/FriendCard";

describe("Friend Card", () => {
  test("Renders button", () => {
    const friendMock = {};

    render(<FriendCard friend={friendMock} />);
    const el = screen.getByText(/Details/i);
    expect(el).toBeInTheDocument();
  });

  test("Checking event handler has been called once", () => {
    const friendMock = {};
    const handleShowDetailsMock = jest.fn();

    render(
      <FriendCard friend={friendMock} onShowDetails={handleShowDetailsMock} />
    );

    const el = screen.getByText(/Details/i);
    fireEvent.click(el);

    expect(handleShowDetailsMock).toHaveBeenCalledTimes(1);
  });

  test("Checking FriendProfile component is render", () => {
    const friendMock = { first_name: "Jeremy", last_name: "Davis" };

    render(<FriendCard friend={friendMock} />);

    const el = screen.getByText(/Jeremy/i);
    expect(el).toBeInTheDocument();
  });
});
