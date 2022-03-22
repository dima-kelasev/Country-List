import { ReactChild, ReactChildren } from "react";
import "./styled.scss";

interface HeaderProps {
  children: ReactChild | ReactChildren;
}

export function Header({ children }: HeaderProps): JSX.Element {
  return (
    <div>
      <div className="header">
        <p className="header_title">Where in the world?</p>
      </div>
      {children}
    </div>
  );
}
