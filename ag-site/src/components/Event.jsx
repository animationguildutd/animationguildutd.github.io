import React from "react";
import moment from "moment";
import { toUpper } from "lodash";
import classNames from "classnames";
import HTMLContent from "../common/HTMLContent";
import Button from "../common/Button";
import Row from "../common/Row";
import isTodayOrInTheFuturePredicate from "../scripts/isTodayOrInTheFuturePredicate";
import { EVENT_TITLE_DATE_FORMAT } from "../common/consts/dates";

const PACKAGE_NAME = "event-component";
const eventComponentClassNames = classNames("container", PACKAGE_NAME);

const renderEventImage = (imageUrl) => (
  <div className="event-image image is-2by1">
    <img src={imageUrl} alt="" />
  </div>
);
const renderButton = (event) => {
  if (
    event.streamURL &&
    event.streamURL.length > 0 &&
    isTodayOrInTheFuturePredicate(event)
  ) {
    return (
      <div className="learn-more-and-event-stream-button-container">
        <Row>
          <Button
            className="learn-more-button"
            text="Learn More"
            onPress={() => (window.location.href = event.eventUrl)}
          />
          <Button
            raised
            isTertiary
            text="Watch Here"
            onPress={() => (window.location.href = event.streamURL)}
          />
        </Row>
      </div>
    );
  }
  return (
    <div className="learn-more-button-container">
      <Row>
        <Button
          className="learn-more-button"
          text="Learn More"
          onPress={() => (window.location.href = event.eventUrl)}
        />
      </Row>
    </div>
  );
};
const renderEventDetails = (event) => {
  const { title, date, location, time, eventHTML } = event;
  const formattedDate = moment(date).format(EVENT_TITLE_DATE_FORMAT);
  return (
    <div className="event-content container content">
      <h2>{title}</h2>
      <h3>
        {`${formattedDate}`}
        {location && `, ${location}`}
      </h3>
      <h3>{time}</h3>
      <HTMLContent html={eventHTML} classNames="content" />

      {renderButton(event)}
    </div>
  );
};

const renderEventDate = (date) => {
  const parsedDate = moment(date);
  const day = parsedDate.format("D");
  const month = toUpper(parsedDate.format("MMM"));

  return (
    <div className="event-date-container">
      <p className="event-month">{month}</p>
      <p className="event-day">{day}</p>
    </div>
  );
};

const Event = ({ event, showStreamURL = false }) => {
  const { date, imageUrl } = event;

  return (
    <div className={eventComponentClassNames}>
      {renderEventImage(imageUrl)}
      {renderEventDetails(event)}
      {renderEventDate(date)}
    </div>
  );
};

export default Event;
