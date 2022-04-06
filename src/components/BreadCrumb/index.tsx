import { Link, useLocation } from "react-router-dom";
import "./style.scss";

interface BreadCrumbsProps {
  crumbs: string;
}

export function BreadCrumbs({ crumbs }: BreadCrumbsProps) {
  const { pathname } = useLocation();
  const crumbsLink = crumbs.split("/");

  return (
    <div className="crumbs_box">
      {crumbsLink.map((crumbs) => (
        <Link key={crumbs} className="crumbs" to={`${pathname}/${crumbs}`}>
          {crumbs}/
        </Link>
      ))}
    </div>
  );
}
