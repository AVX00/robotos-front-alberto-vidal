import {
  createRobotAction,
  deleteRobotAction,
  loadRobotsAciton,
  updateRobotAction,
} from "./robotsActionsCreator";
import robotsActionTypes from "./robotsActionTypes";

describe("Given a robotsActionsCreator", () => {
  describe("When the create robot action is called passing a robot", () => {
    test("Then it should return an action with type create robot and the robot", () => {
      const robot = { name: "joselito" };
      const expectedAction = { type: robotsActionTypes.createRobot, robot };

      const action = createRobotAction(robot);

      expect(action).toEqual(expectedAction);
    });
  });

  describe("When the delete robot action is called passing an id", () => {
    test("Then it shoild return an action with type delete robot and the id", () => {
      const id = 3;
      const expectedAction = { type: robotsActionTypes.deleteRobot, id };

      const action = deleteRobotAction(id);

      expect(action).toEqual(expectedAction);
    });
  });

  describe("When the load robots action is called passing an array of robots", () => {
    test("Then it should return an action with type load robots and the array of robots", () => {
      const robots = [{ name: "joselito" }, { name: "robotin" }];
      const expectedAction = { type: robotsActionTypes.loadRobots, robots };

      const action = loadRobotsAciton(robots);

      expect(action).toEqual(expectedAction);
    });
  });

  describe("When the update robot action is called passing a robot", () => {
    test("Then it should return an action with type update robot and the robot", () => {
      const robot = { name: "joselito" };
      const expectedAction = { type: robotsActionTypes.updateRobot, robot };

      const action = updateRobotAction(robot);

      expect(action).toEqual(expectedAction);
    });
  });
});
