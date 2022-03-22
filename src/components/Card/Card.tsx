import { CountriesType } from "../../types";
import { Flag } from "./component/Flag";
import "./styled.scss";
import { BlockWithText } from "./component/BlockWithTextx";

interface CardProps {
  card: CountriesType;
}

export function Card({ card }: CardProps) {
  return (
    <a href={`country/${card.name.common}`} className="card_preview">
      <Flag url={card.flags.svg} alt={card.name.common} />

      <div className="country_description">
        <p className="name_preview">{card.name.common}</p>
        <div className="description_preview">
          <BlockWithText title="Population" subtitle={card.population} />
          <BlockWithText title="Region" subtitle={card.region} />
          <BlockWithText title="Capital" subtitle={card.capital} />
        </div>
      </div>
    </a>
  );
}
