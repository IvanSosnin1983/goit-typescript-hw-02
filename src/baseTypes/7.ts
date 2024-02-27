/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum DaysOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursady,
  Friday,
  Saturday,
  Sunday,
}

const isWeekend = (day: DaysOfWeek): Boolean => {
  return day === DaysOfWeek.Saturday || day === DaysOfWeek.Sunday;
};
