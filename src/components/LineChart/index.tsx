import { useEffect, useState } from "react";
import { APIKEY, arrayX } from "../../constants";
import { WeatherType } from "../../types";
import { generatePolylineArray } from "../../utils";
import API from "../../utils/api/weatherAPI";
import { Spinner } from "../Spinner";

import "./style.scss";
import { CurrentForecast } from "./CurrentForecast";

interface LineChartProps {
  capital?: string;
}

export function LineChart({ capital }: LineChartProps) {
  const [weather, setWeather] = useState<WeatherType>();

  useEffect(() => {
    API.get(`forecast.json?key=${APIKEY}&q=${capital}`).then((res) => {
      const data = res.data;
      setWeather(data);
    });
  }, [capital]);

  const arrayY = weather?.forecast.forecastday[0].hour.map((day) => day.temp_c);

  const hour = weather?.forecast.forecastday?.[0].hour;

  const polyline = generatePolylineArray(arrayX, arrayY);

  return (
    <>
      {weather?.current.condition.icon && <CurrentForecast data={weather} />}
      <div className="line_chart">
        {hour ? (
          <div className="diagram_box">
            <div className="data_box data_time_box">
              {hour?.map((hour, i) => (
                <p key={i} className="data time">
                  {hour.time.slice(11, 13)}
                </p>
              ))}
            </div>
            <p className="description">Hour's</p>
            <svg x="0px" y="0px" viewBox="0 0 1000 2" height="100" width="100%">
              <polyline
                points={polyline}
                style={{ background: "white" }}
                stroke="#fff"
                strokeWidth="5"
              />
              {arrayX.map((coordX, i) => (
                <circle
                  key={i}
                  cx={coordX}
                  r={6}
                  cy={arrayY?.[i]}
                  fill="#fff"
                />
              ))}
            </svg>
            <div className="data_box">
              {hour?.map((hour, i) => (
                <p key={i} className="data">{`${hour.temp_c}°`}</p>
              ))}
            </div>
            <p className="description">temperature °</p>
          </div>
        ) : (
          <Spinner />
        )}
      </div>
    </>
  );
}
