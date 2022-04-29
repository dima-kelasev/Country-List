import { useContext } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { FlippedContext } from "../../Context/FlippedContext";
import { CountriesType, WeatherType } from "../../types";
import { BreadCrumbs } from "../BreadCrumb";
import { Button } from "../Button";
import { Capitals } from "../Capitals";
import { DescriptionCountryBlock } from "../DescriptionCountryBlock";
import { LineChart } from "../LineChart";

interface CardCountryPageProps {
  setFlippedPage: (value: boolean) => void;
  flippedPage: boolean;
  country: CountriesType;
  capitalData: WeatherType[];
  className: string;
}

export function CardCountryPage({
  setFlippedPage,
  flippedPage,
  country,
  capitalData,
  className,
}: CardCountryPageProps) {
  const { isFlipped, setIsFlipped } = useContext(FlippedContext);
  const history = useHistory();
  const { pathname } = useLocation();

  return (
    <div className={`pageCountry-${className}`}>
      <div className="">
        <BreadCrumbs
          isFlippedPage={flippedPage}
          setIsFlippedPage={setFlippedPage}
          crumbs={pathname}
        />
        <div className="button_box">
          <Button
            onClick={() => {
              history.goBack();
              setIsFlipped(!isFlipped);
            }}
            text="Back"
          />
        </div>

        <div className="country_display">
          <img
            className="main_flag"
            src={country?.flags.svg}
            alt={country?.name.common}
          />
          <DescriptionCountryBlock
            setFlippedPage={setFlippedPage}
            flippedPage={flippedPage}
            country={country}
          />
        </div>
        <LineChart capital={country?.capital} />
        <Capitals capitals={capitalData} />
      </div>
    </div>
  );
}
