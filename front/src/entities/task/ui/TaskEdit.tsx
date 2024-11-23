import React from "react";
import { TextField } from "@mui/material";
import s from "./TaskEdit.module.scss";
import TaskCalendar from "./TaskCalendar";
type Props = {};

const TaskEdit = (props: Props) => {
  return (
    <div className={s.task_edit}>
      <div className={s.title}>
        <TextField
          id="standard-basic"
          label="Название задачи"
          variant="standard"
        />
      </div>
      <div className={s.description}>
        <TextField
          id="standard-basic"
          label="Описание задачи"
          multiline
          maxRows={4}
        />
      </div>
      <TaskCalendar />
    </div>
  );
};

export default TaskEdit;
