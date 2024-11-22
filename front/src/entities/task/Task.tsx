import React from "react";
import s from "./Task.module.tsx";
type Props = {};

const Task = ({ task }: Props) => {
  return <div className={s.task}></div>;
};

export default Task;
