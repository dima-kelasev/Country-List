import { WeatherType } from "../../types";
import { Columns } from "./Columns";
import { Loader } from "./Loader";

import "./style.scss";

interface CapitalsProps {
  capitals: WeatherType[];
}

export function Capitals({ capitals }: CapitalsProps) {
  const one = capitals[0];
  const two = capitals[1];
  const three = capitals[2];
  const four = capitals[3];
  const five = capitals[4];

  return (
    <div className="await">
      {capitals.length ? (
        <>
          <h1>Forecast in five random Capitals:</h1>
          <table className="table_box">
            <tbody>
              <tr>
                <th>Capital</th>
                <th>t°</th>
                <th>Wind mp/h</th>
                <th>Direction</th>
                <th></th>
              </tr>
              <Columns capital={one} />
              <Columns capital={two} />
              <Columns capital={three} />
              <Columns capital={four} />
              <Columns capital={five} />
            </tbody>
          </table>
        </>
      ) : (
        <div className="loader_box">
          <p>Loading</p>
          <Loader />
        </div>
      )}
    </div>
  );
}
