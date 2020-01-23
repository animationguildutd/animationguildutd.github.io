import moment from "moment";

export default event => {
  const today = moment();
  const future = moment(event.date);

  const isInTheFuture = future.diff(today) >= 0;
  const isToday = future.isSame(today, "d");

  return isInTheFuture || isToday;
};
