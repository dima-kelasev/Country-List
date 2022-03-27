import "./style.scss";

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

export function Button({ text, onClick }: ButtonProps) {
  return (
    <button onClick={onClick} className="button">
      {text}
    </button>
  );
}
