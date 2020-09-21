import React from "react";
import { capitalize } from "lodash";
import PastSpeakerModel from "../models/PastSpeakerModel";

const PACKAGE_NAME = "past-speaker-section-component";

const PastSpeaker = (props: PastSpeakerModel) => {
  let text: string = `${capitalize(props.firstName)} ${capitalize(
    props.lastName
  )}`;
  if (props.position) {
    text = `${text} - ${capitalize(props.position)}`;
  }
  return <section className={PACKAGE_NAME}>{text}</section>;
};

export default PastSpeaker;
