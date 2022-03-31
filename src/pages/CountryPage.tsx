import { useState } from "react";
import { useEffect } from "react";
import {
  useHistory,
  useLocation,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import { DescriptionCountryBlock } from "../components/DescriptionCountryBlock";
import { Spinner } from "../components/Spinner";
import { CountriesType } from "../types";
import API from "../utils/api/index";

import "../components/DescriptionCountryBlock/style.scss";
import { Button } from "../components/Button";
import { BreadCrumbs } from "../components/BreadCrumb";
import { LineChart } from "../components/LineChart";
import { getRandomBoats } from "../utils";
import { Capitals } from "../components/Capitals";

export function CountryPage(): JSX.Element {
  const { id } = useParams<{ id?: string }>();
  const [data, setData] = useState<CountriesType[]>();
  const [capitals, setCapitals] = useState<string[]>([]);

  const { pathname } = useLocation();
  const history = useHistory();
  const params = useRouteMatch();

  const country = data?.[0];

  useEffect(() => {
    API.get(`alpha/${id}`)
      .then((res) => {
        const data = res.data;
        setData(data);
      })
      .catch((error) => console.log(error));

    async function fetchCapital() {
      const result = await API.get("all").then((res) => {
        const data = res.data;
        if (data) {
          const randomBoats = getRandomBoats(data, 5);
          const randomCapital: string[] = randomBoats.map(({ capital }) =>
            capital.toString()
          );

          setCapitals(randomCapital);
        }
      });
      return result;
    }
    fetchCapital();
  }, [id]);

  if (!data) return <Spinner />;

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
            src={country?.flags.svg}
            alt={country?.demonyms?.f}
          />
          <DescriptionCountryBlock country={country} />
        </div>
        <LineChart capital={country?.capital} />
        <Capitals capitals={capitals} />
      </div>
    </>
  );
}
