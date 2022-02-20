import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Robots from "../components/Robots/Robots";
import { loadRobotsTunk } from "../redux/thunks/robotsThunks";

const HomePage = () => {
  const dispatch = useDispatch();
  const { robots } = useSelector((state) => state);

  useEffect(() => {
    dispatch(loadRobotsTunk);
  }, [dispatch]);

  return <Robots robots={robots} />;
};

export default HomePage;
