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
  const crumbsLink = crumbs.split("/");
  const { isFlipped, setIsFlipped } = useContext(FlippedContext);

  const onFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const onFlipPage = () => {
    setIsFlippedPage(!isFlippedPage);
  };

  return (
    <div className="crumbs_box">
      <Link className="crumbs" to="/" onClick={onFlip}>
        HOME
      </Link>
      {crumbsLink.map((crumbs) => (
        <Link
          key={crumbs}
          onClick={onFlipPage}
          className="crumbs"
          to={`${pathname}/${crumbs}`}
        >
          {crumbs}/
        </Link>
      ))}
    </div>
  );
}
