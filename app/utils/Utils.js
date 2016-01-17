import moment from 'moment';
export function calc() {
  let startTime = 10; //AM
  let hoursInDay = 24;
  let hoursInWorkDay = 9;
  let daysInWeek = 5;
  let today = moment();
  let totalHoursInWeek = hoursInWorkDay * daysInWeek;
  let countHoursToday = today.hour() - startTime;
  // check if we are not in the working hours
  if (countHoursToday < 0 || countHoursToday > hoursInWorkDay)
    countHoursToday = hoursInWorkDay;
  if (today.hour() < startTime)
    countHoursToday = 0;
  let todayInNumber = today.weekday(); // Sunday = 1
  let hoursTillNow = (todayInNumber) * hoursInWorkDay + countHoursToday;
  const daysLeftToWeekend = daysInWeek - todayInNumber;
  return {
    percent: (hoursTillNow / totalHoursInWeek) * 100,
    days: daysLeftToWeekend - 1,
    hours: Math.abs(hoursInDay - today.hour()),
    today: today
  }
}
