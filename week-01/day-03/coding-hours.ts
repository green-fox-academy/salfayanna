'use strict';
export { };

// An average Green Fox attendee codes 6 hours daily
// The semester is 17 weeks long
//
// Print how many hours is spent with coding in a semester by an attendee,
// if the attendee only codes on workdays.
//
// Print the percentage of the coding hours in the semester if the average
// work hours weekly is 52

let dailyHours: number = 6;
let semesterLength: number = 17;
let workDays: number = 5;
let avgWorkHoursWeekly: number = 52;

let codingHoursSemester: number = semesterLength * workDays * dailyHours;

console.log(codingHoursSemester);

console.log(codingHoursSemester / (semesterLength * avgWorkHoursWeekly) * 100);