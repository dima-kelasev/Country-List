import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation, useParams, useRouteMatch } from "react-router-dom";
import { CountriesType } from "../../types";
import { Button } from "../Button";
import { LineChart } from "../LineChart";
import { Text } from "./Text";

interface DescriptionCountryBlockProps {
  country?: CountriesType;
}
interface Location {
  country: string;
  localtime: string;
  name: string;
  tz_id: string;
}

interface ConditionType {
  icon: string;
  text: string;
}

interface HourType {
  temp_c: number;
  time: string;
  condition: ConditionType;
}

interface ForecastDayType {
  date: string;
  hour: HourType[];
}

interface ForecastDay {
  forecastday: ForecastDayType[];
}

interface WeatherType {
  current: [];
  forecast: ForecastDay;
  location: Location;
}

export function DescriptionCountryBlock({
  country,
}: DescriptionCountryBlockProps) {
  const params = useRouteMatch();
  const { pathname } = useLocation();
  const [weather, setWeather] = useState<WeatherType>();

  const forecast = weather?.forecast.forecastday[0].hour.map(
    (day) => day.temp_c
  );

  const APIKEY = "e0885939d5524e7486a103123222703";

  useEffect(() => {
    axios
      .get(
        `http://api.weatherapi.com/v1/forecast.json?key=${APIKEY}&q=${country?.capital}&days=1&aqi=no&alerts=no`
      )
      .then((res) => {
        const data = res.data;
        setWeather(data);
      });
  }, [country?.capital]);

  return (
    <div className="description">
      <LineChart arrayY={forecast} />
      <h1>{country?.name.common}</h1>
      <div className="description_text">
        <div>
          <Text title="Native Name" text={country?.name.common} />
          <Text title="Population" text={country?.population} />
          <Text title="Region" text={country?.region} />
          <Text title=" Sub Region" text={country?.subregion} />
        </div>
        <div>
          <Text title="Capital" text={country?.capital} />
          <Text
            title="Top Level Domain"
            // @ts-ignore: Unreachable code error
            text={country?.tld?.map((name) => name)}
          />
          <Text title="Language" text={country?.languages.grn} />
        </div>
      </div>

      <div className="borders">
        <Text title="Border Countries" text=" " />
        {country?.borders?.map((country) => (
          <div key={country} className="border_box">
            <Link to={country}>
              <Button text={country} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
