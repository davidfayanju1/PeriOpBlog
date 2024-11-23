import { ChangeEvent } from "react";
import { BsEyeFill } from "react-icons/bs";

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
  password: boolean;
}

const Input = ({
  placeholder,
  label,
  handleChangeText,
  value,
  containerStyle = "",
  inputStyle = "",
  type,
  password = false,
  options = [],
  ...props
}: InputProps) => {
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    handleChangeText(e.target.value);
  };

  return (
    <>
      {label && (
        <label className="block mb-2 text-sm font-medium poppins-regular text-gray-500">
          {label}
        </label>
      )}
      <div className={containerStyle}>
        {type === "text" ? (
          <div className="input_container flex items-center justify-between">
            <input
              type={password ? "password" : "text"}
              className={`outline-none placeholder:text-[14px] poppins-regular w-full bg-transparent border-none ${inputStyle}`}
              placeholder={placeholder}
              onChange={handleChange}
              value={value}
              {...props}
            />

            {/* {password === true && (
              <div className="password_container">
                <BsEyeFill color="gray" />
              </div>
            )} */}
          </div>
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
    </>
  );
};

export default Input;
