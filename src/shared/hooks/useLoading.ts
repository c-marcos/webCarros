import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setLoading } from "../redux/slices/loadingSlice";

export const useLoading = () => {
  const { loading } = useAppSelector((state) => state.loading);
  const dispatch = useAppDispatch();

  const handleLoading = useCallback(
    (status: boolean) => {
      dispatch(setLoading(status));
    },
    [dispatch]
  );
  return {
    loading,
    handleLoading,
  };
};
