interface TextProps {
  title: string;
  text?: string | number;
}

export function Text({ title, text }: TextProps) {
  return (
    <p>
      {title}: <span>{text}</span>
    </p>
  );
}
