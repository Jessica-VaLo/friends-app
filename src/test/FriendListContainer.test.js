import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import FriendsListContainer from "./../component/FriendsListContainer";

describe("Friend List Container", () => {
  test("Checking renderization of its childrens", () => {
    const friendsMock = [{ first_name: "Jeremy", last_name: "Davis" }];

    render(<FriendsListContainer friends={friendsMock} />);
    const el = screen.getByText(/Friends/i);
    const el1 = screen.getByText(/Davis/i);
    const el2 = screen.getByText(/Details/i);

    expect(el).toBeInTheDocument();
    expect(el1).toBeInTheDocument();
    expect(el2).toBeInTheDocument();
  });

  test("Checking event handler has been called once", () => {
    const friendsMock = [{ first_name: "Jeremy", last_name: "Davis" }];
    const handleShowDetailsMock = jest.fn();

    render(
      <FriendsListContainer
        friends={friendsMock}
        onShowDetails={handleShowDetailsMock}
      />
    );

    const el = screen.getByText(/Details/i);
    fireEvent.click(el);

    expect(handleShowDetailsMock).toHaveBeenCalledTimes(1);
  });
});
