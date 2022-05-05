import Button from "../UI/Button";

import classes from "./Board.module.css";

const Board = (props) => {
  return (
    <div className={classes.board}>
      <div>
        <Button className={classes.btn}>1</Button>
        <Button className={classes.btn}>2</Button>
        <Button className={classes.btn}>3</Button>
      </div>
      <div>
        <Button className={classes.btn}>4</Button>
        <Button className={classes.btn}>5</Button>
        <Button className={classes.btn}>6</Button>
      </div>
      <div>
        <Button className={classes.btn}>7</Button>
        <Button className={classes.btn}>8</Button>
        <Button className={classes.btn}>9</Button>
      </div>
    </div>
  );
};

export default Board;
