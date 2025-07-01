import { MainStyle } from "./style";

type Props = React.ComponentProps<'main'>

export const Main = ({ children }: Props) => {
  return <MainStyle>{children}</MainStyle>;
};
