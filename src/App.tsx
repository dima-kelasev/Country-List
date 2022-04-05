import { Main } from "./pages/Main";
import { CountryPage } from "./pages/CountryPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AppContext } from "./Context/AppContext";

import "./style/index.scss";

export function App(): JSX.Element {
  const value = {
    crumbs: [],
    capital: [],
  };

  return (
    <BrowserRouter>
      <Switch>
        <AppContext.Provider value={value}>
          <Route exact path="/" component={Main} />
          <Route path="/:id" children={<CountryPage />} />
        </AppContext.Provider>
      </Switch>
    </BrowserRouter>
  );
}
