import { Switch, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Main } from "../../pages/Main";
import { CountryPage } from "../../pages/CountryPage";

export function Content() {
  const location = useLocation();
  return (
    <TransitionGroup>
      <CSSTransition exit timeout={1000} classNames="fade" key={location.key}>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/:id" children={<CountryPage />} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
}
