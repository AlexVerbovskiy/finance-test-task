import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Loader from "./Loader";

describe("react loader component", () => {
  it('should find text "Loading..."', () => {
    const { getByText } = render(<Loader />);
    expect(getByText(/Loading.../)).toBeInTheDocument();
  });

  it('should find class "loader" 1 time', () => {
    const { container } = render(<Loader />);
    expect(container.getElementsByClassName("loader").length).toBe(1);
  });
});
