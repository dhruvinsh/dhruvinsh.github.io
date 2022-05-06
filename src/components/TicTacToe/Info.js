const Info = (props) => {
  let content = "X";
  if (props.switchPlayer) content = "O";
  return <div>Player = {content}</div>;
};

export default Info;
