import { Dispatch, SetStateAction, useState } from "react";
import "./styled.scss";
import API from "../../utils/api/index";
import { regionFilters } from "../../constants/regionFilters";
import { CountriesType } from "../../types";

interface RegionSelectProps {
  setCountries: Dispatch<SetStateAction<CountriesType[]>>;
}

export function RegionSelect({ setCountries }: RegionSelectProps) {
  const [isShowDropDown, setIsShowDropDown] = useState(false);
  const [region, setRegion] = useState<string>("");

  function openDropDown() {
    setIsShowDropDown(!isShowDropDown);
  }

  function getRegion(filter: string) {
    API.get(`/${filter}`).then((res) => {
      setCountries(res.data);
    });
  }

  return (
    <div className="filter_block">
      <p
        className={isShowDropDown ? "title_active" : "title"}
        onClick={openDropDown}
      >
        {region.length > 1 ? region : "Filter be Region"}
      </p>
      <div className={isShowDropDown ? "dropDown_active" : "dropDown"}>
        <ul className="region_list">
          {regionFilters.map((region) => (
            <li
              key={region.id}
              onClick={() => {
                setRegion(region.title);
                getRegion(region.filter);
                setIsShowDropDown(false);
              }}
            >
              {region.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
