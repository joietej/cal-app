import ical, { ICalCalendarMethod } from "ical-generator";

const calendar = ical({ name:"Sample Calendar", description:"My First iCal" });

calendar.source("https://cal-app.fly.dev/cal")
calendar.url("https://cal-app.fly.dev/cal")
calendar.prodId({company:"Sample", product:"SampleCal"})
calendar.method(ICalCalendarMethod.PUBLISH)
calendar.scale('gregorian')
calendar.timezone("Asia/Kolkata")
calendar.ttl(60)

const startTime = new Date();
const endTime = new Date();
endTime.setHours(startTime.getHours() + 1);
calendar.createEvent({
  start: startTime,
  end: endTime,
  summary: "Example Event",
  description: "It works",
  location: "My room",
});

export default calendar;
