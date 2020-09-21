import React from "react";
import SectionHeader from "../common/SectionHeader";
import PastSpeaker from "./PastSpeaker";
import PastSpeakerModel from "../models/PastSpeakerModel";

const PACKAGE_NAME = "past-speakers-section-component";

const PAST_SPEAKERS = [
  { firstName: "jon", lastName: "washington" },
  { firstName: "jonathan", lastName: "washington" },
  { firstName: "jonny", lastName: "washington" },
  { firstName: "j", lastName: "wash", position: "animator" },
  { firstName: "jon", lastName: "washington" },
  { firstName: "jonathan", lastName: "washington" },
  { firstName: "jonny", lastName: "washington" },
  { firstName: "j", lastName: "wash", position: "animator" },
  { firstName: "jon", lastName: "washington" },
  { firstName: "jonathan", lastName: "washington" },
  { firstName: "jonny", lastName: "washington" },
  { firstName: "j", lastName: "wash", position: "animator" },
  { firstName: "jon", lastName: "washington" },
  { firstName: "jonathan", lastName: "washington" },
  { firstName: "jonny", lastName: "washington" },
  { firstName: "j", lastName: "wash", position: "animator" },
  { firstName: "jon", lastName: "washington" },
  { firstName: "jonathan", lastName: "washington" },
  { firstName: "jonny", lastName: "washington" },
  { firstName: "j", lastName: "wash", position: "animator" },
  { firstName: "jon", lastName: "washington" },
  { firstName: "jonathan", lastName: "washington" },
  { firstName: "jonny", lastName: "washington" },
  { firstName: "j", lastName: "wash", position: "animator" },
  { firstName: "jon", lastName: "washington" },
  { firstName: "jonathan", lastName: "washington" },
  { firstName: "jonny", lastName: "washington" },
  { firstName: "j", lastName: "wash", position: "animator" },
  { firstName: "jon", lastName: "washington" },
  { firstName: "jonathan", lastName: "washington" },
  { firstName: "jonny", lastName: "washington" },
  { firstName: "j", lastName: "wash", position: "animator" },
];

const renderPastSpeaker = (speaker: PastSpeakerModel) => (
  <PastSpeaker {...speaker} />
);

const PastSpeakerSection = () => (
  <section className={PACKAGE_NAME}>
    <SectionHeader
      text="Past Speakers"
      isSecondary={false}
      className=""
      children={[]}
    />
    <div className="container">
      {PAST_SPEAKERS.map((speaker) => renderPastSpeaker(speaker))}
    </div>
  </section>
);

export default PastSpeakerSection;
