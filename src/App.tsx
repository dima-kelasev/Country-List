import "./style/index.scss";
import { Main } from "./pages/Main";
import { CountryPage } from "./pages/CountryPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";

export function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/:id" children={<CountryPage />} />
      </Switch>
    </BrowserRouter>
  );
}
