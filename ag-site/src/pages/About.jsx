import React, { Component } from "react";
import Header from "../common/Header";
import AboutSection from "../components/AboutSection";
import MailingListSection from "../components/MailingListSection";
import Footer from "../common/Footer";
import OfficersSection from "../components/OfficersSection";
import { initGoogleSheets, getAllOfficers } from "../scripts/googleSheets";
import { sortBy } from "lodash";
class AboutPage extends Component {
  constructor(props) {
    super(props);
    initGoogleSheets(this.dataLoadedCB);
  }
  state = { officers: [] };
  dataLoadedCB = () => {
    let officers = getAllOfficers();
    officers = sortBy(officers, "order");
    this.setState({ officers: officers });
  };
  render() {
    return (
      <div>
        <Header />
        <AboutSection />
        <OfficersSection officers={this.state.officers} />
        <MailingListSection />
        <Footer />
      </div>
    );
  }
}

export default AboutPage;
