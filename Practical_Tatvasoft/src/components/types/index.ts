export type ButtonProps = {
  className?: string;
  title: string;
  onClick: (e: any) => void;
};

export type CheckBoxProps = {
  checkboxId: string;
  value?: boolean;
  onChange: (e: any) => void;
};

export type InputProps = {
  className?: string;
  type?: string;
  value?: string;
  placeholder?: string;
  onChange: (e: any) => void;
  maxLength?: number;
};

export type DropdownProps = {
  className: string;
  options: { value: string; label: string }[];
  value?: {
    value: string;
    label: string;
  };
  onChange: (e: any) => void;
};

export type FormProps = { isEdit: boolean };
