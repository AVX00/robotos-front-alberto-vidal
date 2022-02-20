import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { createRobotThunkCreator } from "../../redux/thunks/robotsThunks";

const RobotForm = styled.form`
  color: #f0f0f0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  & > input {
    width: 100%;
  }
`;

const NewRobot = () => {
  const blankData = {
    name: "",
    img: "",
    speed: "",
    resistance: "",
    "fabrication-date": "",
  };
  const [formData, setFormData] = useState(blankData);
  const handleDataChange = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const dispatch = useDispatch();

  const handleSubmitEvent = (event) => {
    event.preventDefault();
    const {
      name,
      img,
      speed,
      resistance,
      "fabrication-date": fabricationDate,
    } = formData;
    const robot = {
      name,
      img,
      stats: { speed, resistance, "fabrication-date": fabricationDate },
    };
    dispatch(createRobotThunkCreator(robot));
  };

  return (
    <RobotForm onSubmit={handleSubmitEvent}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          autoComplete="new-password"
          placeholder="Robot Name"
          onChange={handleDataChange}
          value={formData.name}
        />
      </div>
      <div className="form-group">
        <label htmlFor="img">Image URL</label>
        <input
          id="img"
          type="text"
          onChange={handleDataChange}
          autoComplete="new-password"
          placeholder="Robot Image"
        />
      </div>
      <div className="form-group">
        <label htmlFor="speed">Speed</label>
        <select name="speed-select" id="speed" onChange={handleDataChange}>
          <option value="">--select one--</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="0">0</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="resistance">Resistance</label>
        <select
          name="resistance-select"
          id="resistance"
          onChange={handleDataChange}
        >
          <option value="">--select one--</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="0">0</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="fabrication-date">Fabrication Date</label>
        <input id="fabrication-date" type="date" onChange={handleDataChange} />
      </div>
      <button type="submit">Create</button>
    </RobotForm>
  );
};

export default NewRobot;
