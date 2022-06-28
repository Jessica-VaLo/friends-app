import { render, screen } from "@testing-library/react";
import FriendProfile from "../component/FriendProfile";

describe("Friend Profile", () => {
  test("Renders friend props properly", () => {
    const friendMock = { first_name: "Jeremy", last_name: "Davis" };

    render(<FriendProfile friend={friendMock} />);
    const el = screen.getByText(/Jeremy/i);
    expect(el).toBeInTheDocument();
  });

  test("Gets available class properly", () => {
    const friendMock = { available: true };

    render(<FriendProfile friend={friendMock} />);
    const el = screen.getByRole("status");
    expect(el).toHaveClass("profile__available--true");
  });
});
