import { ChangeEvent, FC } from "react";

interface InputProps {
  type: "text" | "number" | "email" | "password";
  label?: string;
  value: string | number;
  name: string;
  placeholder: string;
  error?: boolean;
  disabled?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({
  type,
  label,
  value,
  name,
  placeholder,
  error,
  disabled,
  onChange,
}) => {
  return (
    <div>
      {label && <p className="text-slate-700 text-sm">{label}</p>}
      <input
        type={type}
        id={label}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        className="outline-none border border-slate-500 rounded-md py-1 pl-1 hover:border-slate-500  focus:border-slate-400 transition-all"
      />
      {error && (
        <p className="text-red-400 text-sm">Input filed can't be empty!</p>
      )}
    </div>
  );
};

export default Input;
