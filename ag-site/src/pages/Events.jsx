import React, { Component } from "react";
import { reverse, difference } from "lodash";
import Header from "../common/Header";
import MailingListSection from "../components/MailingListSection";
import Events from "../components/EventsPageEventsSection";
import Footer from "../common/Footer";
import isTodayOrInTheFuturePredicate from "../scripts/isTodayOrInTheFuturePredicate";
import { initGoogleSheets, getAllEvents } from "../scripts/googleSheets";

const getEvents = events => {
  const upcomingEvents = reverse(events.filter(isTodayOrInTheFuturePredicate));
  const pastEvents = difference(events, upcomingEvents);

  return [...upcomingEvents, ...pastEvents];
};

class EventsPage extends Component {
  constructor(props) {
    super(props);
    initGoogleSheets(this.dataLoadedCB);
  }
  state = { events: [] };
  dataLoadedCB = () => {
    let events = getAllEvents();
    this.setState({ events: events });
  };
  render() {
    return (
      <div>
        <Header />
        <Events events={getEvents(this.state.events)} />
        <MailingListSection />
        <Footer />
      </div>
    );
  }
}

export default EventsPage;
