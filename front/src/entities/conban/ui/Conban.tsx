import React from "react";
import { useDroppable } from "@dnd-kit/core";
import s from "./Conban.module.scss";
import uuid from "react-uuid";
import { type Conban as ConbanType } from "../../../shared/model/types";
import { useAppDispatch, useAppSelector } from "../../../shared/model";
import { DndContext } from "@dnd-kit/core";
import Task from "../../task/ui/Task";
import { Divider, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { delConban } from "../../../shared/model/redux-slices/TaskSlice";

type Props = {
  data: ConbanType;
};

const Conban = ({ data }: Props) => {
  const { isOver, setNodeRef } = useDroppable({
    id: data.conbanId,
  });
  const tasks = useAppSelector((state) => state.task.tasks);
  const filtered = tasks.filter((task) => {
    return task.conbanId === data.conbanId;
  });
  const dispatch = useAppDispatch();
  const deleteConban = () => {
    dispatch(delConban({ targetId: data.conbanId }));
  };

  return (
    <div className={s.conban} ref={setNodeRef}>
      <div className={s.conban_info}>
        <h3 className={s.conban_name}>{data.name}</h3>
        <IconButton onClick={deleteConban} aria-label="delete" color="error">
          <DeleteIcon />
        </IconButton>
      </div>
      <Divider />
      <div className={s.tasks}>
        {filtered.map((task) => {
          return <Task key={task.taskId} task={task} />;
        })}
      </div>
    </div>
  );
};

export default Conban;
