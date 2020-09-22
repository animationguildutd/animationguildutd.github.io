import React from "react";
import { Route, Switch } from "react-router-dom";
import IndexPage from "./pages/index";
import EventsPage from "./pages/Events";
import {
  HOME_PAGE_ROUTE,
  EVENTS_PAGE_ROUTE,
  ABOUT_PAGE_ROUTE,
  CONTACT_PAGE_ROUTE,
  EVENT_STREAMS_PAGE_ROUTE,
} from "./common/consts/routes";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import NotFoundPage from "./pages/404";
import EventStreams from "./pages/EventStreams";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path={CONTACT_PAGE_ROUTE} component={ContactPage} />
        <Route path={ABOUT_PAGE_ROUTE} component={AboutPage} />
        <Route path={EVENTS_PAGE_ROUTE} component={EventsPage} />
        <Route path={EVENT_STREAMS_PAGE_ROUTE} component={EventStreams} />
        <Route exact path={HOME_PAGE_ROUTE} component={IndexPage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
