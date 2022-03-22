import { useState } from "react";
import { useEffect } from "react";
import { Card } from "../components/Card/Card";
import { CountriesType } from "../types";
import "../style/index.scss";

import API from "../utils/api/index";
import { SearchAndSelectBar } from "../components/SerachAndSelectBar.tsx";
import { Spinner } from "../components/Spinner";

export function Main() {
  const [countries, setCountries] = useState<CountriesType[]>([]);
  const [searchTerms, setSearchTerms] = useState<string>("");

  useEffect(() => {
    API.get("all")
      .then((res) => {
        const data = res.data;
        setCountries(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <SearchAndSelectBar
        value={searchTerms}
        setSearchTerms={setSearchTerms}
        setCountries={setCountries}
      />

      <div className="card_wrapper">
        {countries.length <= 0 ? (
          <Spinner />
        ) : (
          countries
            .filter((country) =>
              country.name.common.toLowerCase().includes(searchTerms)
            )
            .map((country) => <Card key={country.name.common} card={country} />)
        )}
      </div>
    </>
  );
}
