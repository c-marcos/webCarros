import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  .logoTipo {
    margin-bottom: 45px;
    max-width: 380px;
    width: 100%;
    img {
      width: 100%;
    }
  }
  p {
    margin-top: 1rem;
  }
  p a {
    text-decoration: underline;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 680px;
  width: 100%;
  gap: 2rem;
`;
