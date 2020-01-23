import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import IndexPage from "./pages/index";
import EventsPage from "./pages/Events";
import {
  HOME_PAGE_ROUTE,
  EVENTS_PAGE_ROUTE,
  ABOUT_PAGE_ROUTE,
  CONTACT_PAGE_ROUTE
} from "./common/consts/routes";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path={"/" + CONTACT_PAGE_ROUTE}>Contact</Route>
          <Route path={"/" + ABOUT_PAGE_ROUTE}>About</Route>
          <Route path={"/" + EVENTS_PAGE_ROUTE}>
            <EventsPage />
          </Route>
          <Route path={HOME_PAGE_ROUTE}>
            <IndexPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
