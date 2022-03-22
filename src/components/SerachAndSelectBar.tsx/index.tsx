import { Dispatch, SetStateAction } from "react";
import { CountriesType } from "../../types";
import { RegionSelect } from "../RegionSelect";
import { SearchInput } from "../SearchInput";

import "./styles.scss";

interface SearchAndSelectBarProps {
  setCountries: Dispatch<SetStateAction<CountriesType[]>>;
  setSearchTerms: Dispatch<SetStateAction<string>>;
  value: string;
}

export function SearchAndSelectBar({
  setCountries,
  setSearchTerms,
  value,
}: SearchAndSelectBarProps) {
  return (
    <div className="nav_bar">
      <SearchInput
        type="search"
        value={value}
        onChange={(event) => {
          setSearchTerms(event.target.value);
        }}
      />
      <RegionSelect setCountries={setCountries} />
    </div>
  );
}
