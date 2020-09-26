import React from "react";
import SectionHeader from "../common/SectionHeader";
import PastSpeaker from "./PastSpeaker";
import PastSpeakerModel from "../models/PastSpeakerModel";

const PACKAGE_NAME = "past-speakers-section-component";
interface PastSpeakersSectionProps {
  pastSpeakers: Array<PastSpeakerModel>;
}

const renderPastSpeaker = (speaker: PastSpeakerModel) => (
  <PastSpeaker {...speaker} />
);

const PastSpeakerSection = (props: PastSpeakersSectionProps) => (
  <section className={PACKAGE_NAME}>
    <SectionHeader
      text="Past Speakers"
      isSecondary={false}
      className=""
      children={[]}
    />
    <div className="container">
      {Array.isArray(props.pastSpeakers) &&
        props.pastSpeakers.map((speaker) => renderPastSpeaker(speaker))}
    </div>
  </section>
);

export default PastSpeakerSection;
