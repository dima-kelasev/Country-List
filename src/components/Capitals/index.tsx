import { WeatherType } from "../../types";
import { Loader } from "./Loader";

import "./style.scss";

interface CapitalsProps {
  capitals: WeatherType[];
}

export function Capitals({ capitals }: CapitalsProps) {
  const name = capitals.map((name) => name.location.name);
  console.log(name);
  return (
    <div className="await">
      {capitals.length ? (
        <div className="table">
          <h1>Forecast in five random capitals:</h1>

          <table className="table_box">
            <tbody>
              <tr>
                <th>Capital</th>
                <th>t°</th>
                <th>Wind mp/h</th>
                <th>Direction</th>
                <th></th>
              </tr>
              <tr>
                {name.map((name) => (
                  <th>{name}</th>
                ))}
                {/* <th>{capital.location.name}</th>
                  <td>{capital.current.temp_c}</td>
                  <td>{capital.current.wind_mph}</td>
                  <td>{capital.current.wind_dir}</td>
                  <th>
                    <img
                      src={capital?.current.condition.icon}
                      alt={capital?.current.condition.text}
                    />
                  </th> */}
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <div className="loader_box">
          <p>Loading</p>
          <Loader />
        </div>
      )}
    </div>
  );
}
