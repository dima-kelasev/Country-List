import { Link, useLocation, useParams, useRouteMatch } from "react-router-dom";
import { CountriesType } from "../../types";
import { Button } from "../Button";
import { Text } from "./Text";

interface DescriptionCountryBlockProps {
  country?: CountriesType;
}

export function DescriptionCountryBlock({
  country,
}: DescriptionCountryBlockProps) {
  const params = useRouteMatch();
  const { pathname } = useLocation();

  // console.log("pathname", pathname);
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
