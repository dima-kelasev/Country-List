import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { DescriptionCountryBlock } from "../components/DescriptionCountryBlock";
import { Spinner } from "../components/Spinner";
import { CountriesType } from "../types";
import API from "../utils/api/index";

import "../components/DescriptionCountryBlock/style.scss";
import { Button } from "../components/Button";

export function CountryPage() {
  const { id } = useParams<{ id?: string }>();
  const [data, setData] = useState<CountriesType[]>();

  useEffect(() => {
    API.get(`name/${id}`)
      .then((res) => {
        const data = res.data;
        setData(data);
      })
      .catch((error) => console.log(error));
  }, [id]);

  const country = data?.[0];

  if (!data) return <Spinner />;

  return (
    <>
      <div className="button_box">
        <Link to="/">
          <Button text="Back" />
        </Link>
      </div>

      <div className="country_display">
        <img
          className="main_flag"
          src={country?.flags.svg}
          alt={country?.demonyms?.f}
        />
        <DescriptionCountryBlock country={country} />
      </div>
    </>
  );
}
