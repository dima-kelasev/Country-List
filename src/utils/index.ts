import { CountriesType } from "../types";

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
