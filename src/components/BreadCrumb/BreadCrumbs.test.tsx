import { screen, waitFor } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { BreadCrumbs } from "./index";

const setIsFlippedPage = jest.fn();

describe("BreadCrumbs", () => {
  test("should display component", () => {
    render(
      <MemoryRouter initialEntries={[{ pathname: "/GOA", search: "" }]}>
        <BreadCrumbs
          crumbs="GOA"
          isFlippedPage={false}
          setIsFlippedPage={setIsFlippedPage}
        />
      </MemoryRouter>
    );
    expect(screen.getByTestId("test-bread-crumbs")).toBeInTheDocument();
    expect(
      screen.getByTestId("test-home-link-bread-crumbs")
    ).toBeInTheDocument();
    expect(screen.getByText("HOME/")).toBeInTheDocument();
  });

  test("should render main page", () => {
    render(
      <MemoryRouter initialEntries={[{ pathname: "/GOA/BOL", search: "" }]}>
        <BreadCrumbs
          crumbs="RUS"
          isFlippedPage={false}
          setIsFlippedPage={setIsFlippedPage}
        />
      </MemoryRouter>
    );
    userEvent.click(screen.getByTestId("test-home-link-bread-crumbs"));
    waitFor(() => {
      expect(screen.getByTestId("test-bread-crumbs")).not.toBeInTheDocument();
    });
  });
});
