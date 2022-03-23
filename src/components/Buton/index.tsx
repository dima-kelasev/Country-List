interface ButtonProps {
  text: string;
  props?: JSX.IntrinsicAttributes;
}

export function Button({ text }: ButtonProps) {
  return <button className="button">{text}</button>;
}
