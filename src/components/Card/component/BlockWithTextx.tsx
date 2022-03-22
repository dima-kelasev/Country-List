import "../../../style/index.scss";

interface BlockWithTextProps {
  title: string;
  subtitle: string | number;
}

export function BlockWithText({ title, subtitle }: BlockWithTextProps) {
  return (
    <div className="text_display">
      <p className="desc_title">{title}:&nbsp; </p>
      <p className="desc_subtitle">{subtitle}</p>
    </div>
  );
}
