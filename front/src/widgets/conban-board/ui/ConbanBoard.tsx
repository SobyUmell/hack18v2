import React from "react";
import Conban from "../../../entities/conban/ui/Conban";
import { type Conban as ConbanType } from "../../../shared/model/types";
import { useAppSelector } from "../../../shared/model";
import s from "ConbanBoard.module.scss";

type Props = {};

const ConbanBoard = (props: Props) => {
  const conbans = useAppSelector((state) => state.task.conbans);

  return (
    <div>
      <div className={s.add_conban}>sdf</div>
      <div>
        {conbans.map((conban) => {
          return <Conban data={conban} key={conban.conbanId} />;
        })}
      </div>
    </div>
  );
};

export default ConbanBoard;
