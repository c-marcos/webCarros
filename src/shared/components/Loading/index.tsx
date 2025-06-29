import { HashLoader } from "react-spinners";
import { useLoading } from "../../hooks/useLoading";
import { Container } from "./style";

export const Loading = () => {
  const { loading } = useLoading();

  return loading ? (
    <Container>
      <HashLoader color="#a50000" />
    </Container>
  ) : null;
};
