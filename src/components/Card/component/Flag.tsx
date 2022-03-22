import "../../../style/index.scss";

interface FlagProps {
  url: string;
  alt: string;
}

export function Flag({ url, alt }: FlagProps) {
  return <img className="flag_preview" src={url} alt={alt} />;
}
