import dateFormat from "dateformat";
import Robots from "./components/Robots/Robots";

const robotines = [
  {
    name: "Robotin",
    img: "https://i.pinimg.com/564x/d5/fe/07/d5fe075620b54caa6786aec6242fde9c.jpg",
    stats: { speed: 8, resistance: 4, date: dateFormat(new Date(), "isoDate") },
    id: 1,
  },
  {
    name: "Joselito",
    img: "https://i.pinimg.com/564x/18/57/7a/18577af226ae7088c5e8e5a9eef14631.jpg",
    stats: {
      speed: 1,
      resistance: 10,
      date: dateFormat(new Date(), "isoDate"),
    },
    id: 2,
  },
  {
    name: "Robotin v2",
    img: "https://i.pinimg.com/736x/bd/9d/06/bd9d06e66fd7886be23fbb936bfb4663.jpg",
    stats: { speed: 3, resistance: 6, date: dateFormat(new Date(), "isoDate") },
    id: 3,
  },
];

function App() {
  return <Robots robots={robotines} />;
}

export default App;
