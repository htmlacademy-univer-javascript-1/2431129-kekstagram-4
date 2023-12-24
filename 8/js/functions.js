const checkStringLength = (str, len) => str.length <= len;

const checkPalindrom = (str) => str === str.split('').reverse().join('');

checkStringLength('',0);
checkPalindrom('');

// Задание 5.16

const summTime = (hours, minutes) => {
  const firstNum = hours.split('.');
  let resHours = Number(firstNum[0]) + Math.floor(minutes / 60);
  let resMinutes = Number(firstNum[1]) + minutes % 60;
  if (resMinutes > 60) {
    resHours += Math.floor(resMinutes / 60);
    resMinutes += resMinutes % 60;
  }
  return parseFloat(`${resHours}.${resMinutes}`);
};

const correctMinutes = (times) => {
  for (let i = 0; i < times.length; i++){
    times[i] = times[i].split(':');
  }
  for (let i = 0; i < times.length; i++){
    let secondPart = times[i][1];
    const firstPart = times[i][0];
    if (secondPart.length === 1){
      secondPart = `0${secondPart}`;
    }
    times[i] = `${firstPart}.${secondPart}`;
  }
  return times;
};

const isMeetingInWorkHours = (startTime, endTime, meetingStart, duration) => {
  const times = [startTime, endTime, meetingStart];
  const startTimeIndex = 0;
  const endTimeIndex = 1;
  const meetingTimeIndex = 2;
  correctMinutes(times);
  if (parseFloat(times[meetingTimeIndex]) < parseFloat(times[startTimeIndex])){
    return false;
  }
  if (summTime(times[meetingTimeIndex], duration) > times[endTimeIndex]){
    return false;
  }
  return true;
};

isMeetingInWorkHours('08:00', '17:30', '14:00', 90); // true
isMeetingInWorkHours('08:00', '14:30', '14:00', 90); // false
