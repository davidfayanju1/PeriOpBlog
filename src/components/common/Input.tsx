import { ChangeEvent } from "react";

interface SelectOption {
  value: string | number;
  label: string;
}

interface InputProps {
  placeholder?: string;
  label?: string;
  handleChangeText: (value: string | number) => void;
  value: string | number;
  containerStyle?: string;
  inputStyle?: string;
  type: "text" | "select";
  options?: SelectOption[]; // Options for select input
}

const Input = ({
  placeholder,
  label,
  handleChangeText,
  value,
  containerStyle = "",
  inputStyle = "",
  type,
  options = [],
  ...props
}: InputProps) => {
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    handleChangeText(e.target.value);
  };

  return (
    <div className={containerStyle}>
      {label && (
        <label className="block mb-2 text-sm font-medium">{label}</label>
      )}
      {type === "text" ? (
        <input
          type="text"
          className={`outline-none placeholder:text-[14px] poppins-regular w-full bg-transparent border-none ${inputStyle}`}
          placeholder={placeholder}
          onChange={handleChange}
          value={value}
          {...props}
        />
      ) : (
        <select
          className={`outline-none poppins-regular w-full border-none bg-transparent ${inputStyle}`}
          onChange={handleChange}
          value={value}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default Input;
