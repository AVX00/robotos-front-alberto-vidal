import {
  createRobotAction,
  deleteRobotAction,
  loadRobotsAciton,
  updateRobotAction,
} from "../actions/robots/robotsActionsCreator";

export const loadRobotsTunk = async (dispatch) => {
  const response = await fetch(process.env.REACT_APP_API_URL);
  const robots = await response.json();
  if (!response.ok) return;

  dispatch(loadRobotsAciton(robots));
};

export const createRobotThunkCreator = (robot) => async (dispatch) => {
  const robotJson = JSON.stringify(robot);
  const response = await fetch(`${process.env.REACT_APP_API_URL}create`, {
    method: "post",
    headers: { "content-type": "aplication/json" },
    body: robotJson,
  });

  if (!response.ok) return;
  const newRobot = await response.json();
  dispatch(createRobotAction(newRobot));
};

export const deseteRobotThunkCreator = (id) => async (dispatch) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}delete/${id}`, {
    method: "delete",
  });

  if (!response.ok) return;
  dispatch(deleteRobotAction(id));
};

export const updateRobotThunkCreator = (robot) => async (dispatch) => {
  const robotJson = JSON.stringify(robot);
  const response = await fetch(`${process.env.REACT_APP_API_URL}update/`, {
    method: "put",
    headers: { "content-type": "aplication/json" },
    body: robotJson,
  });

  if (!response.ok) return;
  const updatedRobot = await response.json();
  dispatch(updateRobotAction(updatedRobot));
};