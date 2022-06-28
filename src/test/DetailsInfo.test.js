import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import DetailsInfo from "./../component/DetailsInfo";

describe("Friend Details Info", () => {
  test("Checking renderization of its childrens", () => {
    const infoMock = { bio: "I'm very friendly", phone: "53421" };

    render(<DetailsInfo info={infoMock} />);
    const el = screen.getByText(/Bio/i);
    const el1 = screen.getByText(/friendly/i);
    const el2 = screen.getByText(/53421/i);

    expect(el).toBeInTheDocument();
    expect(el1).toBeInTheDocument();
    expect(el2).toBeInTheDocument();
  });
});
