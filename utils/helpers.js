export function getHoursAndMinutesFromString(timeString) {
  const splittedTime = timeString.split('h');

  //default value 20h00
  if (splittedTime && splittedTime.length !== 2) {
    return {
      hours: 20,
      minutes: 00
    };
  }

  return {
    hours: parseInt(splittedTime[0]),
    minutes: parseInt(splittedTime[1])
  };
}
