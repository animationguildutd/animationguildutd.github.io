import React from "react";

import { Route } from "react-router-dom";
import IndexPage from "./pages/index";
import EventsPage from "./pages/Events";
import {
  HOME_PAGE_ROUTE,
  EVENTS_PAGE_ROUTE,
  ABOUT_PAGE_ROUTE,
  CONTACT_PAGE_ROUTE
} from "./common/consts/routes";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
function App() {
  return (
    <div className="App">
      <Route path={CONTACT_PAGE_ROUTE} component={ContactPage} />
      <Route path={ABOUT_PAGE_ROUTE} component={AboutPage} />
      <Route path={EVENTS_PAGE_ROUTE} component={EventsPage} />
      <Route exact path={HOME_PAGE_ROUTE} component={IndexPage} />
    </div>
  );
}

export default App;
