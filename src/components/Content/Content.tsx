import { Route, Switch } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { Main } from "../../pages/Main";
import { CountryPage } from "../../pages/CountryPage";
import { useContext } from "react";
import { FlippedContext } from "../../Context/FlippedContext";

export function Content() {
  const { isFlipped } = useContext(FlippedContext);

  const routes = [
    {
      path: "/",
      Component: <Main />,
      className: "front",
      flip: !isFlipped,
      exact: true,
    },
    {
      path: "/:id",
      Component: <CountryPage />,
      className: "back",
      flip: isFlipped,
      exact: false,
    },
  ];

  return (
    <div className="container">
      {routes.map(({ path, Component, className, flip, exact }) => (
        <Route key={path} exact path={path}>
          {() => (
            <CSSTransition
              in={flip}
              timeout={1000}
              classNames={className}
              unmountOnExit
            >
              <div className="page">{Component}</div>
            </CSSTransition>
          )}
        </Route>
      ))}
    </div>
  );
}
