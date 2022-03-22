import { ClassAttributes, InputHTMLAttributes } from "react";
import { Input } from "./component/input";

export function SearchInput(
  props: JSX.IntrinsicAttributes &
    ClassAttributes<HTMLInputElement> &
    InputHTMLAttributes<HTMLInputElement>
): JSX.Element {
  return <Input {...props} />;
}
