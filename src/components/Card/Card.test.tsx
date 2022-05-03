import { screen, waitFor } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import { render } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { Card } from "./Card";

const mpkData = {
  population: 2222,
  name: {
    common: "test-name",
    official: "test-offical-name",
  },
  flags: {
    svg: "",
    png: "",
  },
  fifa: "test",
  region: "test-region",
  capital: "test-capital",
  demonyms: { f: "test-name", m: "test-name" },
  subregion: "",
  tld: [{ name: "" }],
  languages: {
    grn: "grn",
    spa: "spa",
    aym: "aym",
    que: "que",
    isl: "isl",
  },
  cca3: "test",
};

describe("Card", () => {
  test("render correctly component", () => {
    const div = document.createElement("div");

    ReactDOM.render(
      <BrowserRouter>
        <Card card={mpkData} />
      </BrowserRouter>,
      div
    );

    waitFor(() => {
      const card = screen.getByTestId("test-card");
      expect(card).toBeInTheDocument();
      expect(card).toHaveAttribute("href");
      expect(screen.getByTestId("test-img-flag")).toHaveAttribute("src");
      expect(screen.getByTestId("test-title-population")).toHaveTextContent(
        "Population"
      );
      expect(screen.getByTestId("test-title-region")).toHaveTextContent(
        "Region"
      );
      expect(screen.getByTestId("test-title-capital")).toHaveTextContent(
        "CApital"
      );
      expect(screen.getByText("test-region")).toBeInTheDocument();
      expect(screen.getByText("test-capital")).toBeInTheDocument();
    });
  });

  test("should render on Country page", () => {
    const div = document.createElement("div");

    ReactDOM.render(
      <BrowserRouter>
        <Card card={mpkData} />
      </BrowserRouter>,
      div
    );

    waitFor(() => {
      const card = screen.getByTestId("test-card");
      userEvent.click(card);
      expect(card).not.toBeInTheDocument();
    });
  });
});
