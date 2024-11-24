import React from "react";
import TaskEdit from "../../../entities/task/ui/TaskEdit";
import s from "./CreateTask.module.scss";
type Props = {};

const CreateTask = (props: Props) => {
  return (
    <div className={s.create_task}>
      <TaskEdit create={true} />
    </div>
  );
};

export default CreateTask;
