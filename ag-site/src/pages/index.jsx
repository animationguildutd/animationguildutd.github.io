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
import EventsSection from "../components/HomePageEventsSection";
import { initGoogleSheets, getAllEvents } from "../scripts/googleSheets";
import scrollRoutes from "../common/consts/scroll-routes";

const { EVENTS_SECTION_SCROLL_ROUTE } = scrollRoutes;
class IndexPage extends Component {
  constructor(props) {
    super(props);
    initGoogleSheets(this.dataLoadedCB);
  }
  state = {
    isAtHeroSection: true,
    events: []
  };
  dataLoadedCB = () => {
    let events = getAllEvents();
    this.setState({ events: events });
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
        <MailingListSection />
        <Footer />
      </div>
    );
  }
}

export default IndexPage;
