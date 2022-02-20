import { combineReducers } from "redux";
import robotsReducer from "./robots/robotsReducer";

const rootReducer = combineReducers({ robots: robotsReducer });

export default rootReducer;
