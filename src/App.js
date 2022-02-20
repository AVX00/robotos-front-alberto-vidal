import dateFormat, { masks } from "dateformat";
import Robots from "./components/Robots/Robots";

const robotines = [
  {
    name: "Robotin",
    img: "https://i.pinimg.com/564x/d5/fe/07/d5fe075620b54caa6786aec6242fde9c.jpg",
    stats: { speed: 8, resistance: 4, date: dateFormat(new Date(), "isoDate") },
  },
];

function App() {
  return <Robots robots={robotines} />;
}

export default App;
