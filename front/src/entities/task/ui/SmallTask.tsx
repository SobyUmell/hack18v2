import React from "react";
import { SmallTask } from "../../../shared/model/types";

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
