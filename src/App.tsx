import "./style/index.scss";
import { Main } from "./pages/Main";
import { CountryPage } from "./pages/CountryPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { BreadCrumbsContext } from "./Context/BreadCrumbsContext";

export function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <BreadCrumbsContext.Provider
          value={{
            crumbs: [],
          }}
        >
          <Route exact path="/" component={Main} />
          <Route path="/:id" children={<CountryPage />} />
        </BreadCrumbsContext.Provider>
      </Switch>
    </BrowserRouter>
  );
}
