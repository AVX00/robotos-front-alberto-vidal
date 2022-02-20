import Robot from "../Robot/Robot";

const Robots = ({ robots }) => {
  return (
    <ul title="robots">
      {robots.map((robot) => (
        <Robot key={robot.id} robot={robot} />
      ))}
    </ul>
  );
};

export default Robots;
