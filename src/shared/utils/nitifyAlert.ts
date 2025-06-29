import { toast } from "react-toastify";
type TyType = "error" | "success";

export const notifyAlert = (msg: string, action: TyType, autoClose = 3000) => {
  if (action === "success") {
    toast.success(msg, { autoClose });
  } else {
    toast.error(msg, { autoClose });
  }
};
