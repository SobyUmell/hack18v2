import React, { useState } from "react";
import Conban from "../../../entities/conban/ui/Conban";
import { type Conban as ConbanType } from "../../../shared/model/types";
import { useAppDispatch, useAppSelector } from "../../../shared/model";
import s from "./ConbanBoard.module.scss";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import {
  addConban,
  changeTaskConban,
} from "../../../shared/model/redux-slices/TaskSlice";
import { TextField, Button } from "@mui/material";
import uuid from "react-uuid";

type Props = {};

const ConbanBoard = (props: Props) => {
  const [curts, setCurts] = useState<string>("");
  const conbans = useAppSelector((state) => state.task.conbans);
  const dispatch = useAppDispatch();

  const handleConbanChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurts(event.target.value);
  };
  const createNewConban = () => {
    const init_conban: ConbanType = {
      conbanId: uuid(),
      name: curts,
    };
    dispatch(addConban({ conban: init_conban }));
    console.log(conbans);
  };
  return (
    <div className={s.conban_board}>
      <div className={s.add_conban_bar}>
        <TextField
          fullWidth
          id="standard-basic"
          label="Название подзадачи"
          variant="standard"
          value={curts}
          onChange={handleConbanChange}
        />
        <Button variant="contained" onClick={createNewConban}>
          СОЗДАТЬ
        </Button>
      </div>
      <div className={s.conban_list}>
        <DndContext onDragEnd={handleDragEnd}>
          {conbans.map((conban) => {
            return <Conban data={conban} key={conban.conbanId} />;
          })}
        </DndContext>
      </div>
    </div>
  );

  function handleDragEnd(event: DragEndEvent) {
    const { over, active } = event;
    dispatch(changeTaskConban({ taskId: active.id, conbanId: over?.id }));
  }
};

export default ConbanBoard;
