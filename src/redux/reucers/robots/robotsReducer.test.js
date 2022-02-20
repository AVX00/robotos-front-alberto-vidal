import {
  createRobotAction,
  deleteRobotAction,
  loadRobotsAciton,
  updateRobotAction,
} from "../../actions/robots/robotsActionsCreator";
import robotsReducer from "./robotsReducer";

describe("Given a robots reducer", () => {
  describe("When it's called with an empty robots array and an action with type load and an array of robots", () => {
    test("Then new robots should contain the robots provided in the action", () => {
      const robots = [];
      const actionRobots = [{ name: "robot" }, { name: "robot 2" }];
      const action = loadRobotsAciton(actionRobots);

      const newRobots = robotsReducer(robots, action);

      expect(newRobots).toEqual(actionRobots);
    });
  });

  describe("When it's called with an array of robots and an action with type create robot and a robot", () => {
    test("Then the new robots should contain the new robot and the previous", () => {
      const robots = [{ name: "robotin" }, { name: "roboto" }];
      const actionRobot = { name: "joselito" };
      const action = createRobotAction(actionRobot);
      const expectedLength = 3;

      const newRobots = robotsReducer(robots, action);

      expect(newRobots).toHaveLength(expectedLength);
    });
  });

  describe("When it's called with an array of robots and an action with type delete robot and a matching id", () => {
    test("Then it should return a new robots array without the robot with matching id", () => {
      const robots = [{ id: 2 }, { id: 4 }];
      const idToDelete = 2;
      const expectedLength = 1;
      const expectedRemovedRobot = { id: 2 };
      const action = deleteRobotAction(idToDelete);

      const newRobots = robotsReducer(robots, action);

      expect(newRobots).not.toContain(expectedRemovedRobot);
      expect(newRobots).toHaveLength(expectedLength);
    });
  });

  describe("When it's called with an array of robots and an aciton with type update and a robot with matching id modified", () => {
    test("Then it should return a new robots array with the modified robot", () => {
      const robots = [
        { name: "jostelito", id: 1 },
        { name: "robotin", id: 3 },
      ];
      const newRobot = { name: "joselito", id: 1 };
      const expectedLength = 2;
      const expectedModifiedRobot = { name: "jostelito", id: 1 };
      const action = updateRobotAction(newRobot);

      const newRobots = robotsReducer(robots, action);

      expect(newRobots).toHaveLength(expectedLength);
      expect(newRobots).toContain(newRobot);
      expect(newRobots).not.toContain(expectedModifiedRobot);
    });
  });

  describe("When it's called providing nothing", () => {
    test("Then the new robots should be an empty array", () => {
      const expectedRobots = [];

      const newRobots = robotsReducer();

      expect(newRobots).toEqual(expectedRobots);
    });
  });
});
