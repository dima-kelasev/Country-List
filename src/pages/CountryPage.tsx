import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Spinner } from "../components/Spinner";
import { CountriesType, WeatherType } from "../types";
import API from "../utils/api/index";
import { CapitalList, fetchCapitalData } from "../utils/index";
import { CSSTransition } from "react-transition-group";

import "../components/DescriptionCountryBlock/style.scss";
import "./style.scss";
import "./flipStyles.scss";
import { CardCountryPage } from "../components/CardCountryPage/CardCountryPage";

export function CountryPage(): JSX.Element {
  const [data, setData] = useState<CountriesType[]>();
  const [capitals, setCapitals] = useState<string[]>([]);
  const [capitalData, setCapitalData] = useState<WeatherType[]>([]);
  const [flippedPage, setFlippedPage] = useState(false);

  const { pathname } = useLocation();

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
    <div className="card_back">
      <div className="card-container">
        <div className="card-button">
          <CSSTransition
            in={!flippedPage}
            timeout={1000}
            classNames="front-face-transition"
          >
            <CardCountryPage
              setFlippedPage={setFlippedPage}
              flippedPage={flippedPage}
              className="front"
              country={country}
              capitalData={capitalData}
            />
          </CSSTransition>
          <CSSTransition
            in={flippedPage}
            timeout={1000}
            classNames="back-face-transition"
          >
            <CardCountryPage
              setFlippedPage={setFlippedPage}
              flippedPage={flippedPage}
              className="back"
              country={country}
              capitalData={capitalData}
            />
          </CSSTransition>
        </div>
      </div>
    </div>
  );
}
