import { Link, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import HomePage from "./Pages/HomePage";

const Header = styled.header`
  width: calc(100% - 40px);
  min-height: 80px;
  background-color: #001219;
  display: flex;
  align-items: center;
  color: #f0f0f0;
  justify-content: space-between;
  padding: 0 20px;
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 300px;
  margin-left: 10px;
  & > a {
    color: #f0f0f0;
    text-decoration: none;
  }
`;
function App() {
  return (
    <>
      <Header>
        <h1>Robots</h1>
        <Navigation>
          <Link to={"/"}>HOME</Link> <Link to={"/new"}>NEW ROBOT</Link>
        </Navigation>
      </Header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
