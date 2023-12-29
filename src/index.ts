import { Hono } from "hono";
import { logger } from "hono/logger"
import { showRoutes } from "Hono/dev"
import calendar from "./cal";

const app = new Hono();

app.use("*", logger())

app.get("/", (c) => c.text("Hello Hono!"));

app.get("/cal", (c) => {
  c.header("Content-Type", "text/calendar; charset=utf-8");
  c.header("Content-Disposition","attachment; filename=cal.ics");
  return c.body(calendar.toString())
});

showRoutes(app, {verbose: true})

export default app;


