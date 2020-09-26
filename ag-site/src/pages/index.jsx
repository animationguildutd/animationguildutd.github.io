import React, { Component } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { Element } from "react-scroll";
import HeroSection from "../components/HeroSection";
import MissionStatementSection from "../components/MissionStatementSection";
import PhotoReelSection from "../components/PhotoReelSection";
import { Waypoint } from "react-waypoint";
import { NAV_BAR_HEIGHT } from "../common/consts/dimensions";
import MailingListSection from "../components/MailingListSection";
import PastSpeakerSection from "../components/PastSpeakersSection";
import EventsSection from "../components/HomePageEventsSection";
import {
  initGoogleSheets,
  getAllEvents,
  getAllPastSpeakers,
} from "../scripts/googleSheets";
import scrollRoutes from "../common/consts/scroll-routes";
import isTodayOrInTheFuturePredicate from "../scripts/isTodayOrInTheFuturePredicate";
import pastSpeakerNameCompare from "../scripts/pastSpeakerNameCompare";
const { EVENTS_SECTION_SCROLL_ROUTE } = scrollRoutes;
class IndexPage extends Component {
  constructor(props) {
    super(props);
    initGoogleSheets(this.dataLoadedCB);
  }
  state = {
    isAtHeroSection: true,
    events: [],
    pastSpeakers: [],
  };
  dataLoadedCB = () => {
    let events = getAllEvents();
    events = events.filter(isTodayOrInTheFuturePredicate);
    let speakers = getAllPastSpeakers();
    speakers = speakers.sort(pastSpeakerNameCompare);
    this.setState({ events: events, pastSpeakers: speakers });
  };
  renderHeroSection = () => (
    <Waypoint
      onEnter={() => this.setState({ isAtHeroSection: true })}
      onLeave={() => this.setState({ isAtHeroSection: false })}
      topOffset={NAV_BAR_HEIGHT + 5}
    >
      <div>
        <HeroSection />
      </div>
    </Waypoint>
  );

  render() {
    return (
      <div>
        {this.renderHeroSection()}
        <Header isTransparent={this.state.isAtHeroSection} />
        <Element name={EVENTS_SECTION_SCROLL_ROUTE}>
          <EventsSection events={this.state.events} />
        </Element>
        <PhotoReelSection />
        <MissionStatementSection />
        <PastSpeakerSection pastSpeakers={this.state.pastSpeakers} />
        <MailingListSection />
        <Footer />
      </div>
    );
  }
}

export default IndexPage;
