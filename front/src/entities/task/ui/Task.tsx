import s from "./Task.module.scss";
import { type Task } from "../../../shared/model/types";
import { useState } from "react";

type Props = {
  task: Task;
};

const Task = ({ task }: Props) => {
  const [mode, setMode] = useState<"show" | "edit">("show");
  return <div></div>;
};

export default Task;
