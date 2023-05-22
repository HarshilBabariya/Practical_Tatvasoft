import React from "react";
import { InputProps } from "../types";

const Input = ({
  className,
  type,
  value,
  placeholder,
  onChange,
  maxLength
}: InputProps) => {
  return (
    <input
      className={`${className} w-50`}
      type={type ? type : "text"}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      maxLength={maxLength}
    />
  );
};

export default Input;
