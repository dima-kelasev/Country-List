import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { FlippedContext } from "../../Context/FlippedContext";
import "./style.scss";

interface BreadCrumbsProps {
  crumbs: string;
  isFlippedPage: boolean;
  setIsFlippedPage: (value: boolean) => void;
}

export function BreadCrumbs({
  crumbs,
  isFlippedPage,
  setIsFlippedPage,
}: BreadCrumbsProps) {
  const { pathname } = useLocation();
  const crumbsLink = crumbs.split("/").slice(1);
  const { isFlipped, setIsFlipped } = useContext(FlippedContext);

  const onFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const onFlipPage = () => {
    setIsFlippedPage(!isFlippedPage);
  };

  console.log(crumbsLink);

  return (
    <div className="crumbs_box" data-testid="test-bread-crumbs">
      <Link
        className="crumbs"
        to="/"
        onClick={onFlip}
        data-testid="test-home-link-bread-crumbs"
      >
        HOME/
      </Link>
      {crumbsLink.map((crumbs) => (
        <Link
          key={crumbs}
          onClick={onFlipPage}
          className="crumbs"
          to={`${pathname}/${crumbs}`}
          data-testid="test-link-bread-crumbs"
        >
          {crumbs}/
        </Link>
      ))}
    </div>
  );
}
