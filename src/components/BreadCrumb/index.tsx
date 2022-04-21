import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { FlippedContext } from "../../Context/FlippedContext";
import "./style.scss";

interface BreadCrumbsProps {
  crumbs: string;
}

export function BreadCrumbs({ crumbs }: BreadCrumbsProps) {
  const { pathname } = useLocation();
  const crumbsLink = crumbs.split("/");
  const { isFlipped, setIsFlipped } = useContext(FlippedContext);

  const onFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="crumbs_box">
      <Link className="crumbs" to="/" onClick={onFlip}>
        HOME
      </Link>
      {crumbsLink.map((crumbs) => (
        <Link key={crumbs} className="crumbs" to={`${pathname}/${crumbs}`}>
          {crumbs}/
        </Link>
      ))}
    </div>
  );
}
