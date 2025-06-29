import type { TypeInput } from "../../types/TypeInput";

export const validateEntry = (type: TypeInput, value: string) => {
  switch (type) {
    case "email":
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    case "password":
      return value.trim() !== "";
    default:
      return value.trim() !== "";
  }
};
