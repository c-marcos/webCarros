import type React from "react";
import { Container, InputBox, Error, Label } from "./style";
import { FaCheckCircle } from "react-icons/fa";
import { FaTimesCircle } from "react-icons/fa";
import { useState } from "react";
import { validateEntry } from "../../utils/validateEntry";
import type { TypeInput } from "../../../types/TypeInput";

type Props = React.ComponentProps<"input"> & {
  name: string;
  type: TypeInput;
  label?: string;
  error?: string;
};

export const Input = ({ name, type, label, error, ...rest }: Props) => {
  const [isValid, setIsValid] = useState(false);
  const [touched, setTouched] = useState(false);

  function handleOnBlur(e: React.FocusEvent<HTMLInputElement, Element>) {
    const input = e.currentTarget;
    const valor = input.value;
    const type = input.name as TypeInput;

    setIsValid(validateEntry(type, valor));

    setTouched(true);
  }

  return (
    <Container>
      <Label>
        {label}
        <InputBox
          touched={touched}
          validated={isValid}
          type={type}
          name={name}
          {...rest}
          onBlur={handleOnBlur}
        />
        {touched && isValid && (
          <FaCheckCircle className="icon" color="#2B825C" />
        )}
        {touched && !isValid && (
          <FaTimesCircle className="icon" color="#D1493D" />
        )}
      </Label>
      {!isValid && touched && <Error>{error}</Error>}
    </Container>
  );
};
