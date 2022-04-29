import { Route, useHistory } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { Main } from "../../pages/Main";
import { CountryPage } from "../../pages/CountryPage";
import { useContext, useEffect } from "react";
import { FlippedContext } from "../../Context/FlippedContext";

export function Content() {
  const { isFlipped } = useContext(FlippedContext);
  const history = useHistory();

  const routes = [
    {
      path: "/",
      Component: <Main />,
      className: "front",
      flip: !isFlipped,
    },
    {
      path: "/:id",
      Component: <CountryPage />,
      className: "back",
      flip: isFlipped,
    },
  ];

  useEffect(() => {
    history.push("/");
  }, []);

  return (
    <div className="container">
      {routes.map(({ path, Component, className, flip }) => (
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
