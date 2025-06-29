import styled from "@emotion/styled";

export const HeaderStyle = styled.header`
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  padding: 0 30px;
  border-bottom: 2px solid #7d7d7d;
  .login {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 40px;
    border: 2px solid #7d7d7d;
    border-radius: 50%;

    :hover {
      .none {
        display: flex;
        cursor: pointer;
      }
    }
  }
  .loginLoguot {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    color: #7d7d7d;
  }
  .menu {
    background-color: #7d7d7d;
    border-radius: 8px;
    padding: 1rem 0.5rem;
    color: #ffffff;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    width: 70px;
  }
  .none {
    position: absolute;
    display: none;
    align-items: end;
    height: 100px;
    top: 0;
  }

  #login:hover {
    background-color: red;
  }
  #login {
    z-index: 2;
  }
`;
