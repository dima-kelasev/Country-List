import { Link, useLocation } from "react-router-dom";
import "./style.scss";

interface BreadCrumbsProps {
  crumbs: string;
}

export function BreadCrumbs({ crumbs }: BreadCrumbsProps) {
  const { pathname } = useLocation();
  const crumbsLink = crumbs.split("/");

  console.log("crumbsLink", crumbsLink);
  return (
    <div className="crumbs_box">
      {crumbsLink.map((crumbs) => (
        <Link className="crumbs" to={`${pathname}/${crumbs}`}>
          {crumbs}/
        </Link>
      ))}
    </div>
  );
}
