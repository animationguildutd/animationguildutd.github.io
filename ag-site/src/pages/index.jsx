import React, { Component } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import HeroSection from "../components/HeroSection";
import MissionStatementSection from "../components/MissionStatementSection";
import PhotoReelSection from "../components/PhotoReelSection";
import { Waypoint } from "react-waypoint";
import { NAV_BAR_HEIGHT } from "../common/consts/dimensions";
class IndexPage extends Component {
  state = {
    isAtHeroSection: true
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
        <PhotoReelSection />
        <MissionStatementSection />
        <Footer />
      </div>
    );
  }
}

export default IndexPage;
