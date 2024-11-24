import React from "react";
import { CalendarWidget } from "../../../widgets/calendar";
import { Navbar } from "../../../widgets/navbar";
import s from "./CalendarPage.module.scss";

type Props = {};

const CalendarPage = (props: Props) => {
  return (
    <div className={s.calendar_page}>
      <Navbar page="calendar" />
      <div className={s.container}>
        <CalendarWidget />
      </div>
    </div>
  );
};

export default CalendarPage;
