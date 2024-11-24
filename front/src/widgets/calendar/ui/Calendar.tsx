import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import { useAppSelector } from "../../../shared/model";
import { EventSourceInput } from "@fullcalendar/core";

type Props = {};

const Calendar = (props: Props) => {
  const tasks = useAppSelector((state) => state.task.tasks);
  const events: EventSourceInput = tasks.map((task) => {
    return {
      title: task.name,
      start: task.startDate,
      end: task.endDate,
    };
  });
  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      events={events}
    />
  );
};

export default Calendar;
