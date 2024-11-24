import s from "./Task.module.scss";
import { type Task as TaskType } from "../../../shared/model/types";
import { TextField, Checkbox, IconButton, Button } from "@mui/material";
import { useState } from "react";
import { useDraggable } from "@dnd-kit/core";

type Props = {
  task: TaskType;
};

const Task = ({ task }: Props) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task.taskId,
  });
  return (
    <div
      className={s.task_conban}
      ref={setNodeRef}
      {...listeners}
      {...attributes}
    >
      <Checkbox color="success" />
      <div className={s.text}>{task.name}</div>
    </div>
  );
};

export default Task;
