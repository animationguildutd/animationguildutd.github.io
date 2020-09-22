import React, { Component } from "react";
import { reverse } from "lodash";
import Header from "../common/Header";
import MailingListSection from "../components/MailingListSection";
import EventStreamsSection from "../components/EventStreamsSection";
import Footer from "../common/Footer";
import isTodayOrInTheFuturePredicate from "../scripts/isTodayOrInTheFuturePredicate";
import hasStreamURL from "../scripts/hasStreamURL";
import { initGoogleSheets, getAllEvents } from "../scripts/googleSheets";
const getEvents = (events) => {
  const upcomingEvents = reverse(events.filter(isTodayOrInTheFuturePredicate));
  const streamEvents = upcomingEvents.filter(hasStreamURL);
  return streamEvents;
};

class EventStreamsPage extends Component {
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
        <EventStreamsSection events={getEvents(this.state.events)} />
        <MailingListSection />
        <Footer />
      </div>
    );
  }
}

export default EventStreamsPage;
