import Tabletop from "tabletop";

const officersURL =
  "https://docs.google.com/spreadsheets/d/1PXeXmX5u1cB-1TdtTfLf7tqsav203c4Qo0quof5BUaQ/edit?usp=sharing";

const eventsURL =
  "https://docs.google.com/spreadsheets/d/1V3ZVLOu47u_P1yBePGJuxginScsswPu3gTS8W0A3N_4/edit?usp=sharing";

let finishedCallBack = null;

let officers = [];
let events = [];

const initGoogleSheets = finishedCB => {
  finishedCallBack = finishedCB;
  officers = [];
  events = [];
  updateCount = 0;
  Tabletop.init({
    key: eventsURL,
    callback: processEventsData,
    simpleSheet: true
  });

  Tabletop.init({
    key: officersURL,
    callback: processOfficersData,
    simpleSheet: true
  });
};

let updateCount = 0;
const update = () => {
  updateCount++;
  if (updateCount === 2 && finishedCallBack !== null) {
    finishedCallBack();
  }
};

const getAllOfficers = () => {
  return officers;
};

const getAllEvents = () => {
  return events;
};

const processOfficersData = (data, tabletop) => {
  data.forEach(officer => officers.push(officer));
  update();
};

const processEventsData = (data, tabletop) => {
  data.forEach(event => events.push(event));
  update();
};

export { initGoogleSheets, getAllOfficers, getAllEvents };
