import React from "react";

interface ButtonProps {
  title: string;
  buttonStyle: string;
  onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, onPress, buttonStyle }) => {
  return (
    <button
      onClick={onPress}
      className={`flex items-center button-hover-effect justify-center text-center ${buttonStyle}`}
    >
      {title}
    </button>
  );
};

export default Button;
