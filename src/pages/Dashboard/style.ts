import styled from "@emotion/styled";

export const DashboardStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 24px;
  height: 100%;
  .descricao {
    font-size: 24px;
    margin-bottom: 1rem;
  }
`;

export const NavStyle = styled.div`
  display: flex;
  align-items: center;
  height: 91px;
  max-width: 1176px;
  padding: 21px 16px;
  gap: 20px;
  border-radius: 8px;
  background-color: #ffffff;
  margin: 80px auto;
  width: 100%;
`;

export const Containt = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px 48px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    gap: 16px 24px;
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 24px;
    padding: 0 16px;
  }
`;

export const Main = styled.main`
  flex: 1;
`;
