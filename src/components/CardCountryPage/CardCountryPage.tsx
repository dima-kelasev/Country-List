import { useContext, useEffect, useState } from "react";
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
  const [locationKeys, setLocationKeys] = useState<(string | undefined)[]>([]);
  const { isFlipped, setIsFlipped } = useContext(FlippedContext);
  const history = useHistory();
  const { pathname } = useLocation();

  useEffect(() => {
    return history.listen((location) => {
      if (history.action === "PUSH") {
        if (location.key) setLocationKeys([location.key]);
      }

      if (history.action === "POP") {
        if (locationKeys[1] === location.key) {
          setLocationKeys(([_, ...keys]) => keys);
          setFlippedPage(!flippedPage);
        } else {
          setLocationKeys((keys) => [location.key, ...keys]);
          if (pathname.length <= 4) {
            setIsFlipped(!isFlipped);
            history.push("/");
          }
          setFlippedPage(!flippedPage);
        }
      }
    });
  }, [locationKeys]);

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
              if (pathname.length > 4) {
                setFlippedPage(!flippedPage);
              }
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
