import { useContext, useState } from "react";
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
import { BreadCrumbsContext } from "../Context/BreadCrumbsContext";
import { BreadCrumbs } from "../components/BreadCrumb";
import axios from "axios";

export function CountryPage(): JSX.Element {
  const { id } = useParams<{ id?: string }>();
  const [data, setData] = useState<CountriesType[]>();
  const { pathname } = useLocation();
  const history = useHistory();
  const { crumbs } = useContext(BreadCrumbsContext);
  const params = useRouteMatch();

  console.log("id", id);

  const APIKEY = "e0885939d5524e7486a103123222703";

  // console.log("id", history);

  useEffect(() => {
    API.get(`name/${id}`)
      .then((res) => {
        const data = res.data;
        setData(data);
      })
      .catch((error) => console.log(error));

    axios
      .get(
        `http://api.weatherapi.com/v1/forecast.json?key=${APIKEY}&q=${id}&days=1&aqi=no&alerts=no`
      )
      .then((res) => console.log(res));
  }, [id]);

  const country = data?.[0];

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
      </div>
    </>
  );
}
