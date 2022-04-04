interface CountryName {
  common: string;
  official: string;
}

interface FlagsType {
  svg: string;
  png: string;
}

interface NativeName {
  f: string;
  m: string;
}

interface DomainName {
  name: string;
}

interface CurrenciesType {
  name: string;
  symbol: string;
}

interface CurrenciesName {
  [name: string]: CurrenciesType;
}

interface LanguagesType {
  grn: string;
  spa: string;
}

export type CountriesType = {
  population: number;
  name: CountryName;
  borders?: string[];
  flags: FlagsType;
  fifa: string;
  region: string;
  capital: string;
  demonyms?: NativeName;
  subregion?: string;
  tld?: DomainName[];
  currencies?: CurrenciesName;
  languages: LanguagesType;
  cca3: string;
};

interface Location {
  country: string;
  localtime: string;
  name: string;
  tz_id: string;
}

interface ConditionType {
  icon: string;
  text: string;
}

interface HourType {
  temp_c: number;
  time: string;
  condition: ConditionType;
}

interface ForecastDayType {
  date: string;
  hour: HourType[];
}

interface ForecastDay {
  forecastday: ForecastDayType[];
}

interface Condition {
  code: number;
  icon: string;
  text: string;
}

interface Current {
  condition: Condition;
  temp_c: number;
  feelslike_c: number;
  gust_kph: number;
  wind_dir: string;
  wind_mph: number;
}

export interface WeatherType {
  current: Current;
  forecast: ForecastDay;
  location: Location;
}
