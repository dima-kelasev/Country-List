import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { CountriesType } from "../types";
import API from "../utils/api/index";

export function CountryPage() {
  const { id } = useParams<{ id?: string }>();
  const [country, setCountry] = useState<CountriesType>();

  useEffect(() => {
    API.get(`name/${id}`)
      .then((res) => {
        const data = res.data;
        setCountry(data);
      })
      .catch((error) => console.log(error));
  }, []);

  console.log("country", country);

  return <h1>Hello {id}</h1>;
}
