import robotsActionTypes from "./robotsActionTypes";

export const createRobotAction = (robot) => ({
  type: robotsActionTypes.createRobot,
  robot,
});

export const deleteRobotAction = (id) => ({
  type: robotsActionTypes.deleteRobot,
  id,
});

export const updateRobotAction = (robot) => ({
  type: robotsActionTypes.updateRobot,
  robot,
});

export const loadRobotsAciton = (robots) => ({
  type: robotsActionTypes.loadRobots,
  robots,
});
