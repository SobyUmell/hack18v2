import React from "react";
import ConbanBoard from "../../../widgets/conban-board/ui/ConbanBoard";
import { Navbar } from "../../../widgets/navbar";

type Props = {};

const ConbanPage = (props: Props) => {
  return (
    <div>
      <Navbar page="conban" />
      <ConbanBoard />
    </div>
  );
};

export default ConbanPage;
