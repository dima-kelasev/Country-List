import { useState, useEffect } from 'react';
import { Card } from '../components/Card/Card';
import { CountriesType } from '../types';
import API from '../utils/api/index';
import { SearchAndSelectBar } from '../components/SerachAndSelectBar.tsx';
import { Spinner } from '../components/Spinner';

import '../style/index.scss';
import './style.scss';

export function Main() {
  const [countries, setCountries] = useState<CountriesType[]>([]);
  const [searchTerms, setSearchTerms] = useState<string>('');
  console.log('call');

  useEffect(() => {
    API.get('all')
      .then((res) => {
        const data = res.data;
        setCountries(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="card_front">
      <div className="card_wrapper">
        {countries.length <= 0 ? (
          <Spinner />
        ) : (
          <>
            <SearchAndSelectBar
              value={searchTerms}
              setSearchTerms={setSearchTerms}
              setCountries={setCountries}
            />
            {countries
              .filter((country) =>
                country.name.common
                  .toLowerCase()
                  .includes(searchTerms.toLowerCase())
              )
              .map((country) => (
                <Card key={country.name.common} card={country} />
              ))}
          </>
        )}
      </div>
    </div>
  );
}
