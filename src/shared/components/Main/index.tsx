import type { ReactNode } from "react";
import { MainStyle } from "./style";

export const Main = ({ children }: { children: ReactNode }) => {
  return <MainStyle>{children}</MainStyle>;
};
