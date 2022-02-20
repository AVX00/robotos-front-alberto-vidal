import "@fontsource/noto-sans-jp";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { deleteRobotThunkCreator } from "../../redux/thunks/robotsThunks";

const Card = styled.li`
  & > .img-wraper > img {
    transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px;
  }
  & > .img-wraper {
    border-radius: 4px;
    margin: 8px;
    box-sizing: border-box;
    overflow: hidden;
    transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
    max-height: 400px;
    min-height: 400px;
  }

  & > .stats {
    position: relative;
    color: #f0f0f0;
    padding: 0 40px;
    height: 50%;
    font-size: 20px;
    & > .stats-list {
      opacity: 0;
      padding-left: 35px;
      flex-direction: column;
      height: 0px;
      font-size: 0;
      list-style: none;
      justify-content: space-between;

      & > .stat {
        position: relative;
        line-height: 27px;
        display: none;
      }
      & > .stat::before {
        content: "一";
        height: 27px;
        width: 27px;
        background-color: #ea698b;
        line-height: 27px;
        color: #0f0f0f;
        font-size: 16px;
        text-align: center;
        position: absolute;
        border-radius: 50%;
        left: -33px;
      }

      & > .stat:nth-child(2)::before {
        content: "二";
      }
      & > .stat:nth-child(3)::before {
        content: "三";
      }
    }
  }

  &:hover > .stats > .stats-list {
    transition: opacity 1s ease-in;
    height: 140px;
    font-size: 20px;
    display: flex;
    opacity: 1;
  }
  &:hover > .stats > .stats-list > .stat {
    display: block;
  }
  &:hover > .img-wraper {
    max-height: 220px;
    min-height: 220px;
  }

  &:hover > .img-wraper > img {
    transform: scale(2);
  }

  &:hover > .stats > .btn-delete {
    opacity: 1;
    transition: opacity 1s ease-in;
  }
`;

const Delete = styled.a`
  background-color: #9b2226;
  text-decoration: none;
  color: #f0f0f0;
  border-radius: 4px;
  padding: 5px;
  position: absolute;
  right: 10px;
  top: 28px;
  opacity: 0;
`;

const formatDate = (date) => {
  const dateObject = new Date(date);
  return `${dateObject.getDay()}/${dateObject.getMonth()}/${dateObject.getFullYear()}`;
};

const Robot = ({
  robot: {
    name,
    img,
    id,
    _id,
    stats: { speed, resistance, "fabrication-date": date },
  },
}) => {
  const dispatch = useDispatch();
  const deleteOnClick = (event) => {
    event.preventDefault();
    dispatch(deleteRobotThunkCreator(id ?? _id));
  };

  return (
    <Card className="robot-card">
      <div className="img-wraper">
        <img src={img} alt={name} />
      </div>

      <div className="stats">
        <h2>{name}</h2>
        <ul title="stats" className="stats-list">
          <li className="stat">{`Speed: ${speed}`}</li>
          <li className="stat">{`Resistance: ${resistance}`}</li>
          <li className="stat">{`Fabrication: ${formatDate(date)}`}</li>
        </ul>
        <Delete className="btn-delete" href="delete" onClick={deleteOnClick}>
          Delete
        </Delete>
      </div>
    </Card>
  );
};
export default Robot;
