import { faker } from "@faker-js/faker";

export const meetings = [
  {
    id: 1,
    date: "Apr 30th, 2024",
    time: "9:00 AM",
    datetime: "2024-05-01T09:00",
    name: "Richard Strauss",
    imageUrl: faker.image.urlLoremFlickr({
      category: "people",
      width: 256,
      height: 256,
    }),
    location: "Office",
  },
  {
    id: 2,
    date: "Apr 30th, 2024",
    time: "9:30 AM",
    datetime: "2024-05-01T09:30",
    name: "Chris Cooper",
    imageUrl: faker.image.urlLoremFlickr({
      category: "people",
      width: 256,
      height: 256,
    }),
    location: "Virtual",
  },
  {
    id: 3,
    date: "Apr 30th, 2024",
    time: "10:00 AM",
    datetime: "2024-05-01T10:00",
    name: "Ben Rodriguez",
    imageUrl: faker.image.urlLoremFlickr({
      category: "people",
      width: 256,
      height: 256,
    }),
    location: "Office",
  },
  // More meetings...
];

export const getMonthName = (dateString) => {
  // Create an array of month names
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Parse the dateString into a Date object
  const date = new Date(dateString + "T00:00:00");

  // Get the month from the Date object
  const monthIndex = date.getMonth(); // getMonth() returns a zero-based index

  // Return the month name corresponding to the month index
  return monthNames[monthIndex];
};

export const generateCalendarDays = (selectedDay) => {
  const firstDay = new Date(selectedDay + "T00:00:00");
  firstDay.setDate(1); // Set to the first day of the month
  firstDay.setHours(0, 0, 0, 0); // Normalize time to midnight

  let lastDay = new Date(firstDay);
  lastDay.setMonth(firstDay.getMonth() + 1);
  lastDay.setDate(0);

  // Calculate the previous Monday from the first day of the month
  const dayOfWeek = firstDay.getDay(); // Sunday - 0, Monday - 1, ..., Saturday - 6
  const daysToMonday = (dayOfWeek + 6) % 7; // (dayOfWeek + 6) % 7 ensures Monday is 0 days away, Sunday is 1 day away, etc.

  let startDay = new Date(firstDay).setDate(firstDay.getDate() - daysToMonday);

  const days = [];
  let day = new Date(startDay);
  let count = 0;
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Normalize today's date

  while (days.length % 7 !== 0 || day <= lastDay) {
    const dayInfo = {
      date: day.toISOString().split("T")[0], // Format date as 'YYYY-MM-DD'
      isCurrentMonth: day.getMonth() === firstDay.getMonth(),
      isToday: day.toDateString() === today.toDateString(),
      isSelected: day.toISOString().split("T")[0] === selectedDay,
    };
    days.push(dayInfo);

    day.setDate(day.getDate() + 1); // Move to the next day

    if (days.length % 7 === 0 && day > lastDay && day.getDate() === 1) {
      break; // If we completed a week and the next day is the start of a new month, stop adding days
    }
  }

  return days;
};

const now = new Date();
now.setHours(0, 0, 0, 0);
export const currentDate = now.toISOString().split("T")[0];
