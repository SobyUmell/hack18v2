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
  return <div></div>;
};

export default Conban;