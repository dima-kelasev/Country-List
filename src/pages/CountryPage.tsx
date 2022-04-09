import { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { DescriptionCountryBlock } from "../components/DescriptionCountryBlock";
import { Spinner } from "../components/Spinner";
import { CountriesType, WeatherType } from "../types";
import API from "../utils/api/index";
import { CapitalList, fetchCapitalData } from "../utils/index";
import { Button } from "../components/Button";
import { BreadCrumbs } from "../components/BreadCrumb";
import { LineChart } from "../components/LineChart";
import { Capitals } from "../components/Capitals";

import "../components/DescriptionCountryBlock/style.scss";

export function CountryPage(): JSX.Element {
  const [data, setData] = useState<CountriesType[]>();
  const [capitals, setCapitals] = useState<string[]>([]);
  const [capitalData, setCapitalData] = useState<WeatherType[]>([]);

  const { pathname } = useLocation();
  const history = useHistory();

  const countryCode = pathname.split("/").slice(-1).toString();

  const country = data?.[0];

  useEffect(() => {
    API.get(`alpha/${countryCode}`)
      .then((res) => {
        const data = res.data;
        setData(data);
      })
      .catch((error) => console.log(error));
  }, [countryCode]);

  useEffect(() => {
    CapitalList(setCapitals);
  }, []);

  useEffect(() => {
    if (capitals.length) {
      Promise.all(
        capitals.map((capital) => {
          return fetchCapitalData(capital);
        })
      ).then((response) => {
        setCapitalData(response);
      });
    }
  }, [capitals]);

  if (!country) return <Spinner />;

  return (
    <>
      <div className="countryPage_wrapper">
        <BreadCrumbs crumbs={pathname} />
        <div className="button_box">
          <Button onClick={history.goBack} text="Back" />
        </div>

        <div className="country_display">
          <img
            className="main_flag"
            src={country.flags.svg}
            alt={country.name.common}
          />
          <DescriptionCountryBlock country={country} />
        </div>
        <LineChart capital={country?.capital} />
        <Capitals capitals={capitalData} />
      </div>
    </>
  );
}
