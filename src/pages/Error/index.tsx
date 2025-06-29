import { Container, Message, StyledLink, Title } from "./style";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";

// Type guard para verificar se o erro é do tipo Error
function isErrorWithMessage(error: unknown): error is Error {
  return (
    typeof error === "object" &&
    error !== null &&
    "message" in error &&
    typeof error.message === "string"
  );
}

export const Error = () => {
  const error = useRouteError();

  let message = "Ocorreu um erro inesperado.";

  if (isRouteErrorResponse(error)) {
    message = `${error.status} - ${error.statusText}`;
  } else if (isErrorWithMessage(error)) {
    message = error.message;
  }

  return (
    <Container>
      <Title>😵 Ops!</Title>
      <Message>{message}</Message>
      <StyledLink to="/">Voltar para a Home</StyledLink>
    </Container>
  );
};
