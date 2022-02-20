import Robot from "../Robot/Robot";

const Robots = ({ robots }) => {
  return (
    <ul>
      {robots.map((robot) => (
        <Robot robot={robot} />
      ))}
    </ul>
  );
};

export default Robots;
