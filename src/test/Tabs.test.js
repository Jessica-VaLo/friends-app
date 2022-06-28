import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Tabs from "../common/Tabs";

describe("Tabs", () => {
  test("renders content", () => {
    render(<Tabs />);
    const el = screen.getByText(/Info/i);
    expect(el).toBeInTheDocument();
  });

  test("clicking tab calls event handler once", () => {
    const handleSelectMock = jest.fn();
    render(<Tabs onSelect={handleSelectMock} />);

    const tab = screen.getByText(/Info/i);
    fireEvent.click(tab);

    expect(handleSelectMock).toHaveBeenCalledTimes(1);
  });

  test("renders its childrens", () => {
    const itemSelected = "info";
    render(
      <Tabs itemSelected={itemSelected}>
        <button id={itemSelected}>Info</button>
      </Tabs>
    );

    const el = screen.getByText("Info");
    expect(el).toHaveClass("tabs__link--active");
  });
});
