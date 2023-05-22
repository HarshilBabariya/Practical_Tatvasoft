import React from "react";
import Select from "react-select";
import { DropdownProps } from "../types";

const SelectDropdown = ({className, options, value, onChange} : DropdownProps) => {
  return <Select options={options} className={`${className}`} defaultValue={value} onChange={onChange} />;
};

export default SelectDropdown;
