import { Fragment } from "react";
import TicTacToe from "./components/TicTacToe/TicTacToe";

function App() {
  return (
    <Fragment>
      <div>
        <p>Some apps that I am learning..</p>
        <ul>
          <li>tic-tac-toe</li>
        </ul>
      </div>
      <TicTacToe />
    </Fragment>
  );
}

export default App;
