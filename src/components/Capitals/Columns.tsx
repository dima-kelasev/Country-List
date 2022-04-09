import { WeatherType } from "../../types";

interface ColumnsProps {
  capital: WeatherType;
}

export function Columns({ capital }: ColumnsProps) {
  return (
    <tr>
      <td>{capital.location.name}</td>
      <td>{capital.current.temp_c}</td>
      <td>{capital.current.wind_mph}</td>
      <td>{capital.current.wind_dir}</td>
      <th>
        <img
          src={capital.current.condition.icon}
          alt={capital.current.condition.text}
        />
      </th>
    </tr>
  );
}
