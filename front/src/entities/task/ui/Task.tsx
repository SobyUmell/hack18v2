import s from "./Task.module.scss";
import { type SmallTask, type LargeTask } from "../../../shared/model/types";
import { useState } from "react";

type Props = {
  task: SmallTask | LargeTask;
};

const Task = ({ task }: Props) => {
  const [mode, setMode] = useState<"show" | "edit">("show");
  if (task.type === "small") {
    return <div className={s.task}></div>;
  } else {
    return <div></div>;
  }
};

export default Task;
