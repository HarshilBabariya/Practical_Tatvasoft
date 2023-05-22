import React from "react";
import { CheckBoxProps } from "../types";

const CheckBox = ({ checkboxId, value, onChange }: CheckBoxProps) => {
  return <input type="checkbox" id={checkboxId} checked={value} onChange={onChange} />;
};

export default CheckBox;
