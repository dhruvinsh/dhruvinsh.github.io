import Button from "../UI/Button";

import classes from "./Board.module.css";

const Board = (props) => {
  return (
    <div className={classes.board}>
      <Button className={classes.btn} onClick={props.onSwitchPlayer}>
        1
      </Button>
      <Button className={classes.btn} onClick={props.onSwitchPlayer}>
        2
      </Button>
      <Button className={classes.btn} onClick={props.onSwitchPlayer}>
        3
      </Button>
      <Button className={classes.btn} onClick={props.onSwitchPlayer}>
        4
      </Button>
      <Button className={classes.btn} onClick={props.onSwitchPlayer}>
        5
      </Button>
      <Button className={classes.btn} onClick={props.onSwitchPlayer}>
        6
      </Button>
      <Button className={classes.btn} onClick={props.onSwitchPlayer}>
        7
      </Button>
      <Button className={classes.btn} onClick={props.onSwitchPlayer}>
        8
      </Button>
      <Button className={classes.btn} onClick={props.onSwitchPlayer}>
        9
      </Button>
    </div>
  );
};

export default Board;
