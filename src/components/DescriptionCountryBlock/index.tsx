import { Link, useLocation, useRouteMatch } from "react-router-dom";
import { CountriesType } from "../../types";
import { Button } from "../Button";
import { Text } from "./Text";
import API from "../../utils/api/index";
import { AxiosResponse } from "axios";

interface DescriptionCountryBlockProps {
  country?: CountriesType;
}

export function DescriptionCountryBlock({
  country,
}: DescriptionCountryBlockProps) {
  const params = useRouteMatch();
  const { pathname } = useLocation();

  // var headers = new Headers();
  // headers.append("X-CSCAPI-KEY", "API_KEY");

  // const requestOptions: any = {
  //   method: "GET",
  //   headers: headers,
  //   redirect: "follow",
  // };

  // fetch(
  //   "https://api.countrystatecity.in/v1/countries/IN/cities",
  //   requestOptions
  // )
  //   .then((response) => response.text())
  //   .then((result) => console.log(result))
  //   .catch((error) => console.log("error", error));

  return (
    <div className="description">
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
        <div className="borders_block">
          {country?.borders?.map((country) => (
            <div key={country} className="border_box">
              <Link to={country}>
                <Button text={country} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
