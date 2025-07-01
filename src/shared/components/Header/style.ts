import styled from "@emotion/styled";

export const HeaderStyle = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  padding: 2rem 30px;
  border-bottom: 2px solid #7d7d7d;
`;

export const MenuLogin = styled.div`
  position: relative;
  display: flex;
  color: #7d7d7d;
  align-items: center;
  gap: 12px;
  .open {
    max-height: 500px; /* valor grande o suficiente para caber os itens */
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;

  .btn {
    border: 2px solid #7d7d7d;
    border-radius: 50%;
    padding: 8px;
    cursor: pointer;
  }
`;

export const Menu = styled.div`
  position: absolute;
  top: 110%; /* posiciona o menu logo abaixo do botão */
  display: flex;
  right: 0;
  flex-direction: column;
  max-height: 0;
  overflow: hidden;
  transition: all 0.3s ease;
  background: #7d7d7d;
  color: #ffffff;
  border-radius: 8px;
`;

export const CustonButton = styled.button`
  display: flex;
  align-items: center;
  margin: 10px;
  gap: 8px;
  padding: 0 10px;
  cursor: pointer;
  border-radius: 4px;
  transition: all 1s;
  color: rgb(228, 228, 228);
  :hover {
    background-color: rgb(100, 100, 100);
  }
`;
