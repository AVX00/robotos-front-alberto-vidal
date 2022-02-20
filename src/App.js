import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NewRobot from "./components/NewRobot/NewRobot";
import Robots from "./components/Robots/Robots";
import { loadRobotsTunk } from "./redux/thunks/robotsThunks";

function App() {
  const dispatch = useDispatch();
  const { robots } = useSelector((state) => state);

  useEffect(() => {
    dispatch(loadRobotsTunk);
  }, [dispatch]);

  return (
    <>
      <NewRobot />
      <Robots robots={robots} />
    </>
  );
}

export default App;
