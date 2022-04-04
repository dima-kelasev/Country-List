import { useEffect, useState } from "react";
import { APIKEY } from "../../constants";
import { WeatherType } from "../../types";
import APIWeather from "../../utils/api/weatherAPI";
import { Loader } from "./Loader";

import "./style.scss";

interface CapitalsProps {
  capitals: string[];
}

export function Capitals({ capitals }: CapitalsProps) {
  const [randomCapital, setRandomCapital] = useState<WeatherType>();
  const [randomCapital1, setRandomCapital1] = useState<WeatherType>();
  const [randomCapital2, setRandomCapital2] = useState<WeatherType>();
  const [randomCapital3, setRandomCapital3] = useState<WeatherType>();
  const [randomCapital4, setRandomCapital4] = useState<WeatherType>();

  useEffect(() => {
    async function fetchData0() {
      const response = await APIWeather.get(
        `forecast.json?key=${APIKEY}&q=${capitals?.[0]}`
      ).then((res) => {
        setRandomCapital(res.data);
      });
      return response;
    }

    async function fetchData1() {
      const response = await APIWeather.get<WeatherType>(
        `forecast.json?key=${APIKEY}&q=${capitals?.[1]}`
      ).then((res) => {
        setRandomCapital1(res.data);
      });
      return response;
    }

    async function fetchData2() {
      const response = await APIWeather.get<WeatherType>(
        `forecast.json?key=${APIKEY}&q=${capitals?.[2]}`
      ).then((res) => {
        setRandomCapital2(res.data);
      });
      return response;
    }

    async function fetchData3() {
      const response = await APIWeather.get<WeatherType>(
        `forecast.json?key=${APIKEY}&q=${capitals?.[3]}`
      ).then((res) => {
        setRandomCapital3(res.data);
      });
      return response;
    }

    async function fetchData4() {
      const response = await APIWeather.get<WeatherType>(
        `forecast.json?key=${APIKEY}&q=${capitals?.[4]}`
      ).then((res) => {
        setRandomCapital4(res.data);
      });
      return response;
    }

    fetchData0();
    fetchData1();
    fetchData2();
    fetchData3();
    fetchData4();
  }, [capitals]);
  return (
    <div className="await">
      {randomCapital === undefined ? (
        <div className="loader_box">
          <p>Loading</p>
          <Loader />
        </div>
      ) : (
        <div className="table">
          <h1>Forecast in five random capitals:</h1>
          <table className="table_box">
            <tr>
              <th>Capital</th>
              <th>t°</th>
              <th>Wind mp/h</th>
              <th>Direction</th>
              <th></th>
            </tr>
            <tr>
              <th>{randomCapital.location.name}</th>
              <td>{randomCapital.current.temp_c}</td>
              <td>{randomCapital.current.wind_mph}</td>
              <td>{randomCapital.current.wind_dir}</td>
              <th>
                <img
                  src={randomCapital?.current.condition.icon}
                  alt={randomCapital?.current.condition.text}
                />
              </th>
            </tr>
            <tr>
              <th>{randomCapital1?.location.name}</th>
              <td>{randomCapital1?.current.temp_c}</td>
              <td>{randomCapital1?.current.wind_mph}</td>
              <td>{randomCapital1?.current.wind_dir}</td>
              <th>
                <img
                  src={randomCapital1?.current.condition.icon}
                  alt={randomCapital1?.current.condition.text}
                />
              </th>
            </tr>
            <tr>
              <th>{randomCapital2?.location.name}</th>
              <td>{randomCapital2?.current.temp_c}</td>
              <td>{randomCapital2?.current.wind_mph}</td>
              <td>{randomCapital2?.current.wind_dir}</td>
              <th>
                <img
                  src={randomCapital2?.current.condition.icon}
                  alt={randomCapital2?.current.condition.text}
                />
              </th>
            </tr>
            <tr>
              <th>{randomCapital3?.location.name}</th>
              <td>{randomCapital3?.current.temp_c}</td>
              <td>{randomCapital3?.current.wind_mph}</td>
              <td>{randomCapital3?.current.wind_dir}</td>
              <th>
                <img
                  src={randomCapital3?.current.condition.icon}
                  alt={randomCapital3?.current.condition.text}
                />
              </th>
            </tr>
            <tr>
              <th>{randomCapital4?.location.name}</th>
              <td>{randomCapital4?.current.temp_c}</td>
              <td>{randomCapital4?.current.wind_mph}</td>
              <td>{randomCapital4?.current.wind_dir}</td>
              <th>
                <img
                  src={randomCapital4?.current.condition.icon}
                  alt={randomCapital4?.current.condition.text}
                />
              </th>
            </tr>
          </table>
        </div>
      )}
    </div>
  );
}
