import { screen } from "@testing-library/dom";
// import userEvent from "@testing-library/user-event";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { BreadCrumbs } from "./index";

const setIsFlippedPage = jest.fn();

describe("BreadCrumbs", () => {
  test("my test", () => {
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
  });
});
