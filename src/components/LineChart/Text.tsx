import "./style.scss";

interface TextProps {
  title: string;
  text?: string;
}

export function Text({ text, title }: TextProps) {
  return (
    <p className="forecast_text">
      {title}
      <span>{text}</span>
    </p>
  );
}
