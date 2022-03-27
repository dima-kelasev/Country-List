import "./style.scss";

interface BreadCrumbsProps {
  crumbs: string;
}

export function BreadCrumbs({ crumbs }: BreadCrumbsProps) {
  return (
    <div className="crumbs_box">
      <p className="crumbs">{crumbs}</p>
    </div>
  );
}
