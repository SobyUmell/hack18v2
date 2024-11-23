import React from "react";
import { useDroppable } from "@dnd-kit/core";
import s from "./Conban.module.scss";
import uuid from "react-uuid";
import { type Conban } from "../../../shared/model/types";
import { useAppDispatch, useAppSelector } from "../../../shared/model";
type Props = {
  data: Conban;
};

const Conban = ({ data }: Props) => {
  const { isOver, setNodeRef } = useDroppable({
    id: uuid(),
  });
  const tasks = useAppSelector((state) => state.task.tasks);

  return (
    <div ref={setNodeRef} className={s.conban}>
      {}
    </div>
  );
};

export default Conban;
