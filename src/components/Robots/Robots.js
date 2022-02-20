import Robot from "../Robot/Robot";

const Robots = ({ robots }) => {
  return (
    <ul title="robots">
      {robots
        ? robots.map((robot) => (
            <Robot key={robot.id ?? robot._id} robot={robot} />
          ))
        : null}
    </ul>
  );
};

export default Robots;
