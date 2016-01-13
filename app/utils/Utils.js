import moment from 'moment';
export function calc() {
  const startTime = 10; //AM
  const hoursInDay = 24;
  const hoursInWorkDay = 9;
  const daysInWeek = 5;
  const today = moment();
  const totalHoursInWeek = hoursInWorkDay * daysInWeek;
  let countHours = today.hour() - startTime;
  // check if we are not in the working hours
  if (countHours < 0)
    countHours = 0;
  if (countHours > hoursInWorkDay)
    countHours = hoursInWorkDay;
  let todayInNumber = today.weekday() + 1; // Sunday = 0
  let hoursTillNow = (todayInNumber - 1) * hoursInWorkDay + countHours;
  const daysLeftToWeekend = daysInWeek - todayInNumber;
  return {
    percent: (hoursTillNow / totalHoursInWeek) * 100,
    days: daysLeftToWeekend,
    hours: daysLeftToWeekend * hoursInDay
  }
}
