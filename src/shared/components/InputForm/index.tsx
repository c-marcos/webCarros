import { Container, InputBox, Error, Label } from "./style";
import { FaCheckCircle } from "react-icons/fa";
import { FaTimesCircle } from "react-icons/fa";
import type { Path } from "react-hook-form";
import type {
  UseFormRegister,
  RegisterOptions,
  FieldValues,
} from "react-hook-form";
import React, { useState } from "react";

type Props<T extends FieldValues> = React.ComponentProps<"input"> & {
  name: Path<T>;
  label?: string;
  register: UseFormRegister<T>;
  rules?: RegisterOptions<T, Path<T>>;
  error?: string;
};

export const Input = <T extends FieldValues>({
  name,
  label,
  register,
  rules,
  error,
  ...rest
}: Props<T>) => {
  const [touched, setTouched] = useState(false);

  function handleOnBlur(e: React.FocusEvent<HTMLInputElement, Element>) {
    if (e.currentTarget.value.trim() !== "") {
      setTouched(true);
    }
  }
  return (
    <Container>
      <Label>
        {label}
        <InputBox
          touched={touched}
          validated={touched && error ? false : true}
          {...register(name, rules)}
          {...rest}
          onBlur={handleOnBlur}
        />
        {touched && !error && (
          <FaCheckCircle className="icon" color="#2B825C" />
        )}
        {touched && error && <FaTimesCircle className="icon" color="#D1493D" />}
      </Label>
      {error && <Error>{error}</Error>}
    </Container>
  );
};
