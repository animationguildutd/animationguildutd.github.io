import React, { Component } from "react";
import moment from "moment";
import { toUpper } from "lodash";
import classNames from "classnames";
import HTMLContent from "../common/HTMLContent";
import Button from "../common/Button";
import Row from "../common/Row";
import isTodayOrInTheFuturePredicate from "../scripts/isTodayOrInTheFuturePredicate";
import { EVENT_TITLE_DATE_FORMAT } from "../common/consts/dates";
import { Lightbox } from "react-modal-image";
const PACKAGE_NAME = "event-component";
const eventComponentClassNames = classNames("container", PACKAGE_NAME);

class Event extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state.imageModalOn = false;
  }
  imageClick = () => {
    this.setState({ imageModalOn: true });
  };
  onModalClose = () => {
    this.setState({ imageModalOn: false });
  };
  renderEventImage = (imageUrl, eventName) => {
    if (this.state.imageModalOn) {
      return (
        <Lightbox
          small={imageUrl}
          medium={imageUrl}
          alt={eventName}
          hideDownload={true}
          hideZoom={true}
          onClose={this.onModalClose}
        />
      );
    } else {
      return (
        <div
          className="event-image image is-2by1"
          style={{ overflow: "hidden" }}
        >
          <img
            src={imageUrl}
            alt=""
            style={{ cursor: "pointer" }}
            onClick={this.imageClick}
          />
        </div>
      );
    }
  };
  renderButton = (event) => {
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
  renderEventDate = (date) => {
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
  renderEventDetails = (event) => {
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

        {this.renderButton(event)}
      </div>
    );
  };
  render() {
    const { event, showStreamURL = false } = this.props;
    const { date, imageUrl } = event;
    return (
      <div className={eventComponentClassNames}>
        {this.renderEventImage(imageUrl, event.title)}
        {this.renderEventDetails(event)}
        {this.renderEventDate(date)}
      </div>
    );
  }
}

export default Event;
