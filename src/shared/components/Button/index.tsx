import { useState, type ComponentProps } from "react";
import { ButtonStyle } from "./style";
import { ClipLoader } from "react-spinners";

type Props = ComponentProps<"button"> & {
  bg?: string;
  w?: string;
  isValid: boolean;
};

export const Button = ({ bg, w, children, isValid, ...props }: Props) => {
  const [checked, setChecked] = useState(false);

  function handleMouseEnter() {
    if (!isValid) {
      setChecked(true);
    }
  }
  function handleMouseLeave() {
    if (!isValid) {
      setChecked(false);
    }
  }

  return (
    <ButtonStyle
      disabled={checked}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      bgColor={bg}
      w={w}
      {...props}
    >
      {checked ? <ClipLoader color="#FFFFFF" /> : children}
    </ButtonStyle>
  );
};
