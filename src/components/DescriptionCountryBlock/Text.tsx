interface TextProps {
  title: string;
  text?: string | number | React.ReactNode;
}

export function Text({ title, text }: TextProps) {
  return (
    <p>
      {title}: <span>{text ? text : "-"}</span>
    </p>
  );
}
