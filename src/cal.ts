import ical, { ICalCalendarMethod } from "ical-generator";

const calendar = ical({ name:"foo", description:"my first iCal" });

calendar.source("http://localhost:3000/cal.ics")
calendar.url("http://localhost:3000/cal.ics")
calendar.prodId({company:"foo", product:"Google Calendar 70.9054"})
calendar.method(ICalCalendarMethod.PUBLISH)
calendar.scale('gregorian')
calendar.timezone("America/New_York")
calendar.ttl(60 * 60 * 24)

const startTime = new Date();
const endTime = new Date();
endTime.setHours(startTime.getHours() + 1);
calendar.createEvent({
  start: startTime,
  end: endTime,
  summary: "Example Event",
  description: "It works",
  location: "my room",
});

export default calendar;
