import { useCallback, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { type UserState, logout, setUser } from "../redux/slices/userSlice";
import { onAuthStateChanged, type User } from "firebase/auth";
import { auth } from "../../api/firebase";
import { useLoading } from "./useLoading";
import { notifyAlert } from "../utils/nitifyAlert";

export const useUser = () => {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const { handleLoading } = useLoading();
  const [isLoadingUser, setIsLoadingUser] = useState(true); // ⬅️ novo estado

  const handleUser = useCallback(
    (firebaseUser: User) => {
      const convertedUser: UserState = {
        uid: firebaseUser.uid,
        nome: firebaseUser.displayName || "",
        email: firebaseUser.email || "",
        isLogged: true,
      };

      dispatch(setUser(convertedUser));
    },
    [dispatch]
  );

  const handleLogout = useCallback(async () => {
    try {
      await auth.signOut();
    } catch (error) {
      notifyAlert("Erro ao deslogar do Firebase:", "error");
      console.log(error);
    } finally {
      dispatch(logout());
    }
  }, [dispatch]);

  useEffect(() => {
    handleLoading(true);

    const unsub = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        handleUser(firebaseUser);
      } else {
        handleLogout();
      }

      setIsLoadingUser(false); // ⬅️ Finaliza o estado de carregamento
      handleLoading(false);
    });

    return () => unsub();
  }, [handleUser, handleLogout, handleLoading]);

  return {
    user,
    handleUser,
    handleLogout,
    isLogged: user.isLogged,
    isLoadingUser, // ⬅️ novo retorno
  };
};
