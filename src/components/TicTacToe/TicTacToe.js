import { useState } from "react";

import Board from "./Board";
import Card from "../UI/Card";
import Info from "./Info";

const TicTacToe = () => {
  const [switchTurn, setSwitchTurn] = useState(false);

  const onClickHandler = () => {
    setSwitchTurn((prevTurn) => !prevTurn);
  };

  return (
    <Card>
      <Info switchPlayer={switchTurn} />
      <Board onSwitchPlayer={onClickHandler} />
    </Card>
  );
};

export default TicTacToe;
