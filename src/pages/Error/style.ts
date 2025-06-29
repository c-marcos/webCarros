import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  padding: 2rem;
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: #e63946;
`;

export const Message = styled.p`
  font-size: 1.2rem;
  margin: 1rem 0;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #007bff;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;
