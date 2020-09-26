import PastSpeakerModel from "../models/PastSpeakerModel";

const compare = (a: PastSpeakerModel, b: PastSpeakerModel) => {
  const nameA: string = (a.firstName + " " + a.lastName).toUpperCase();
  const nameB: string = (b.firstName + " " + b.lastName).toUpperCase();
  let comparison: number = 0;
  if (nameA > nameB) {
    comparison = 1;
  } else if (nameA < nameB) {
    comparison = -1;
  }
  return comparison;
};
export default compare;
