import { Link, useLocation } from "react-router-dom";
import { CountriesType } from "../../types";
import { Button } from "../Button";
import { Text } from "./Text";

interface DescriptionCountryBlockProps {
  country?: CountriesType;
  flippedPage: boolean;
  setFlippedPage: (value: boolean) => void;
}

export function DescriptionCountryBlock({
  country,
  setFlippedPage,
  flippedPage,
}: DescriptionCountryBlockProps) {
  const { pathname } = useLocation();

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
              <Link
                to={`${pathname}/${country}`}
                onClick={() => setFlippedPage(!flippedPage)}
              >
                <Button text={country} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
