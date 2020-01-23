import React from "react";
import Link from "../common/Link";
import SectionHeader from "../common/SectionHeader";
import Event from "./Event";
import Button from "../common/Button";

const PACKAGE_NAME = "home-page-events-section-component";
const BIG_SECTION_HEADER_CLASS_NAME = "big-section-header";

const renderEvents = events => events.map(event => <Event event={event} />);
const HomePageEventsSection = ({ events }) => (
  <section className={PACKAGE_NAME}>
    <div className="container">
      <SectionHeader text="upcoming events" />
      <div className="events-container">
        {Array.isArray(events) && renderEvents(events)}
      </div>
      <SectionHeader
        className={BIG_SECTION_HEADER_CLASS_NAME}
        text="More Events Coming Soon!"
        isSecondary
      >
        <Link to={"Events"}>
          <Button text="View Our Past Events" isSecondary />
        </Link>
      </SectionHeader>
    </div>
  </section>
);

export default HomePageEventsSection;
