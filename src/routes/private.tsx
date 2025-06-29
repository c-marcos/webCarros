import { useUser } from "../shared/hooks/useUser";
import { Navigate } from "react-router-dom";
import { Loading } from "../shared/components/Loading";

export const Private = ({ children }: { children: React.ReactNode }) => {
  const { isLogged, isLoadingUser } = useUser();

  if (isLoadingUser) {
    return <Loading />; // ou um Spinner
  }

  if (!isLogged) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};
