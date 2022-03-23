import { CountriesType } from "../../types";
import { Text } from "./Text";

interface DescriptionCountryBlockProps {
  country?: CountriesType;
}

export function DescriptionCountryBlock({
  country,
}: DescriptionCountryBlockProps) {
  return (
    <div className="description">
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
        <Text title="Currencies" text={country?.currencies?.PYG.name} />
        <Text title=" Language" text={country?.languages.grn} />
      </div>
    </div>
  );
}
