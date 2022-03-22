import { ClassAttributes, InputHTMLAttributes } from "react";
import "../styled.scss";

export function Input(
  props: JSX.IntrinsicAttributes &
    ClassAttributes<HTMLInputElement> &
    InputHTMLAttributes<HTMLInputElement>
): JSX.Element {
  return (
    <input
      {...props}
      className="search_input"
      placeholder="Search for a country..."
    />
  );
}
