import { Outlet } from "react-router-dom";
import { Header } from "./shared/components/Header";
import { Main } from "./shared/components/Main";
import styled from "@emotion/styled";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <AppStyled>
        <Header />
        <Main>
          <Outlet />
        </Main>
      </AppStyled>
    </>
  );
}

export const AppStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

export default App;
