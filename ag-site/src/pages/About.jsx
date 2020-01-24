import React from "react";
import Header from "../common/Header";
import AboutSection from "../components/AboutSection";
import MailingListSection from "../components/MailingListSection";
import Footer from "../common/Footer";

const AboutPage = () => {
  return (
    <div>
      <Header />
      <AboutSection />
      <MailingListSection />
      <Footer />
    </div>
  );
};

export default AboutPage;
