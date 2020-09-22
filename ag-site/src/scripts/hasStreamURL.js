export default (event) => {
  if (!("streamURL" in event)) {
    return false;
  }
  if (event["streamURL"].length === 0) {
    return false;
  }

  return true;
};
