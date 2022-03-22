interface CountryName {
  common: string;
  official: string;
}

interface FlagsType {
  svg: string;
  png: string;
}

export type CountriesType = {
  population: number;
  name: CountryName;
  flags: FlagsType;
  fifa: string;
  region: string;
  capital: string;
};
