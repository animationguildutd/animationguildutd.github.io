import React from "react";
import SectionHeader from "../common/SectionHeader";
import Event from "./Event";

const PACKAGE_NAME = "events-page-events-section-component";

const renderEvents = events => events.map(event => <Event event={event} />);

const EventsPageEventsSection = ({ events }) => (
  <section className={PACKAGE_NAME}>
    <div className="container">
      <SectionHeader text="events" />
      <div className="events-container">
        {Array.isArray(events) && renderEvents(events)}
      </div>
    </div>
  </section>
);

export default EventsPageEventsSection;
