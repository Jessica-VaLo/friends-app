import { render, screen } from "@testing-library/react";
import Grid from "./../common/Grid";

describe("Grid", () => {
  test("Renders properly", () => {
    const textMock = "Bio";

    render(<Grid textFirstColumn={textMock} />);
    const el = screen.getByText(/Bio/i);
    expect(el).toBeInTheDocument();
  });
});
