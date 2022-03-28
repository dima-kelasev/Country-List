import { WeatherType } from "../../types";
import { Text } from "./Text";

interface CurrentForecastProps {
  data: WeatherType;
}

export function CurrentForecast({ data }: CurrentForecastProps) {
  return (
    <div className="forecast_now">
      <Text
        title="Fells Like"
        text={
          data.current.feelslike_c < 0
            ? ` - ${data.current.feelslike_c}`
            : ` + ${data.current.feelslike_c}`
        }
      />
      <Text
        title="Temperature"
        text={
          data.current.temp_c < 0
            ? ` - ${data.current.temp_c}`
            : ` + ${data.current.temp_c}`
        }
      />
      <Text title={data.current.condition.text} />
      <img
        style={{ width: "64px", height: "64px" }}
        src={data?.current.condition.icon}
        alt={data?.current.condition.text}
      />
    </div>
  );
}
