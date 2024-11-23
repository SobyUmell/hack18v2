import React from "react";
import { type SmallTask } from "../../../shared/model/types";
import s from "./SmallTask.module.scss";

type Props = {
  task: SmallTask;
};

const SmallTask = ({ task }: Props) => {
  return (
    <div className={s.small_task}>
      <h1>{task.name}</h1>
      <div>{task.description}</div>
    </div>
  );
};

export default SmallTask;
