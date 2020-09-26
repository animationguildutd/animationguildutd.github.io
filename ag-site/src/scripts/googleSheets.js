import Tabletop from "tabletop";

const officersURL =
  "https://docs.google.com/spreadsheets/d/1PXeXmX5u1cB-1TdtTfLf7tqsav203c4Qo0quof5BUaQ/edit?usp=sharing";

const eventsURL =
  "https://docs.google.com/spreadsheets/d/1V3ZVLOu47u_P1yBePGJuxginScsswPu3gTS8W0A3N_4/edit?usp=sharing";

const pastSpeakerURL =
  "https://docs.google.com/spreadsheets/d/1GO_qcrVo2l4iNC6H8PWhiMr2qXSwf1XlrT-83bvWaKo/edit?usp=sharing";
let finishedCallBack = null;

let officers = [];
let events = [];
let pastSpeakers = [];

const initGoogleSheets = (finishedCB) => {
  finishedCallBack = finishedCB;
  officers = [];
  events = [];
  updateCount = 0;
  Tabletop.init({
    key: eventsURL,
    callback: processEventsData,
    simpleSheet: true,
  });

  Tabletop.init({
    key: officersURL,
    callback: processOfficersData,
    simpleSheet: true,
  });

  Tabletop.init({
    key: pastSpeakerURL,
    callback: processPastSpeakersData,
    simpleSheet: true,
  });
};

let updateCount = 0;
const update = () => {
  updateCount++;
  if (updateCount === 3 && finishedCallBack !== null) {
    //3 because we have 3 different things call update, process officers data, process event data, & process
    finishedCallBack();
  }
};

const getAllOfficers = () => {
  return officers;
};

const getAllEvents = () => {
  return events;
};

const getAllPastSpeakers = () => {
  return pastSpeakers;
};

const processPastSpeakersData = (data, tabletop) => {
  data.forEach((speaker) => pastSpeakers.push(speaker));
  update();
};
const processOfficersData = (data, tabletop) => {
  data.forEach((officer) => addOfficer(officer));
  update();
};

const addOfficer = (officer) => {
  if (officer.order !== "") {
    officer.order = parseInt(officer.order);
  } else {
    officer.order = 100;
  }
  officers.push(officer);
};
const processEventsData = (data, tabletop) => {
  data.forEach((event) => events.push(event));
  update();
};

export { initGoogleSheets, getAllOfficers, getAllEvents, getAllPastSpeakers };
