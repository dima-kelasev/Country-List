import { CountriesType, WeatherType } from "../types";
import APIWeather from "../utils/api/weatherAPI";
import API from "../utils/api/index";
import { APIKEY } from "../constants";

export function generatePolylineArray(arrayX: number[], arrayY?: number[]) {
  let polyline = "";
  arrayX.map((coordX, i) => (polyline += `${coordX}, ${arrayY?.[i]}, `));
  return polyline;
}

export const getRandomBoats = (
  arr: CountriesType[],
  length: number
): CountriesType[] => {
  const result: CountriesType[] = new Array(length);
  let fullLength = arr.length;
  const taken = new Array(fullLength);
  while (length--) {
    const randomNumber = Math.floor(Math.random() * fullLength);
    result[length] =
      arr[randomNumber in taken ? taken[randomNumber] : randomNumber];
    taken[randomNumber] =
      --fullLength in taken ? taken[fullLength] : fullLength;
  }

  return result;
};

export async function fetchCapitalData(capital: string): Promise<WeatherType> {
  const response = await APIWeather.get(
    `forecast.json?key=${APIKEY}&q=${capital}`
  ).then((res) => {
    return res.data;
  });
  return response;
}

export async function CapitalList(setCapitals: (value: string[]) => void) {
  const result = await API.get("all").then((res) => {
    const data = res.data;
    if (data) {
      const random = getRandomBoats(data, 5);
      const randomCapital: string[] = random.map(({ capital }) =>
        capital.toString()
      );

      setCapitals(randomCapital);
    }
  });
  return result;
}
