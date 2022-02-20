import robotsActionTypes from "../../actions/robots/robotsActionTypes";

const robotsReducer = (robots = [], action = {}) => {
  let newRobots;

  switch (action.type) {
    case robotsActionTypes.createRobot:
      newRobots = [...robots, action.robot];
      break;
    case robotsActionTypes.deleteRobot:
      newRobots = robots.filter((robot) => robot.id ?? robot._id !== action.id);
      break;
    case robotsActionTypes.loadRobots:
      newRobots = action.robots;
      break;
    case robotsActionTypes.updateRobot:
      newRobots = robots.map((robot) =>
        robot.id === action.robot.id ? action.robot : robot
      );
      break;

    default:
      newRobots = [...robots];
      break;
  }

  return newRobots;
};

export default robotsReducer;
