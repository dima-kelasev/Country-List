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
};
