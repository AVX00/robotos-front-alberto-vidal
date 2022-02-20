import Robot from "../Robot/Robot";

const Robots = ({ robots }) => {
  return (
    <ul title="robots" className="robots-list">
      {robots
        ? robots.map((robot) => (
            <Robot key={robot.id ?? robot._id} robot={robot} />
          ))
        : null}
    </ul>
  );
};

export default Robots;
