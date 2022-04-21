import { CountriesType } from "../../types";
import { Flag } from "./component/Flag";
import "./styled.scss";
import { BlockWithText } from "./component/BlockWithTextx";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { FlippedContext } from "../../Context/FlippedContext";

interface CardProps {
  card: CountriesType;
}

export function Card({ card }: CardProps) {
  const { isFlipped, setIsFlipped } = useContext(FlippedContext);
  return (
    <Link
      to={`${card.cca3}`}
      className="card_preview"
      onClick={() => {
        setIsFlipped(!isFlipped);
      }}
    >
      <Flag url={card.flags.svg} alt={card.name.common} />

      <div className="country_description">
        <p className="name_preview">{card.name.common}</p>
        <div className="description_preview">
          <BlockWithText title="Population" subtitle={card.population} />
          <BlockWithText title="Region" subtitle={card.region} />
          <BlockWithText title="Capital" subtitle={card.capital} />
        </div>
      </div>
    </Link>
  );
}
