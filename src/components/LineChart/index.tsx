import { useEffect, useState } from "react";
import { APIKEY, arrayX } from "../../constants";
import { WeatherType } from "../../types";
import { generatePolylineArray } from "../../utils";
import API from "../../utils/api/weatherAPI";
import { Spinner } from "../Spinner";

import "./style.scss";

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
      {hour ? (
        <div className="diagram_box">
          <div className="data_box data_time_box">
            {hour?.map((hour) => (
              <p className="data time">{hour.time.slice(11, 13)}</p>
            ))}
          </div>
          <p className="description">Hour's</p>
          <svg x="0px" y="0px" viewBox="0 0 1000 2" height="100" width="100%">
            <polyline
              points={polyline}
              style={{ background: "white" }}
              stroke="#fff"
              strokeWidth="4"
            />
            {arrayX.map((coordX, i) => (
              <circle key={i} cx={coordX} cy={arrayY?.[i]} r={5} fill="#fff" />
            ))}
          </svg>
          <div className="data_box">
            {hour?.map((hour) => (
              <p className="data">{`${hour.temp_c}°`}</p>
            ))}
          </div>
          <p className="description">temperature °</p>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
}
