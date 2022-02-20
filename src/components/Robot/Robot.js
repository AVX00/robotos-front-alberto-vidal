import "@fontsource/noto-sans-jp";
import styled from "styled-components";

const Card = styled.li`
  width: 340px;
  height: 500px;
  transition: all 1s cubic-bezier(0.25, 0.8, 0.25, 1);
  border-radius: 4px;
  background-color: #0f0f0f;
  margin: 0 auto;
  list-style: none;
  display: flex;
  flex-direction: column;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),
    0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),
    0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);

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
`;

const Robot = ({
  robot: {
    name,
    img,
    stats: { speed, resistance, "fabrication-date": date },
  },
}) => {
  return (
    <Card>
      <div className="img-wraper">
        <img src={img} alt={name} />
      </div>

      <div className="stats">
        <h2>{name}</h2>
        <ul title="stats" className="stats-list">
          <li className="stat">{`Speed: ${speed}`}</li>
          <li className="stat">{`Resistance: ${resistance}`}</li>
          <li className="stat">{`Fabrication: ${date}`}</li>
        </ul>
      </div>
    </Card>
  );
};
export default Robot;
