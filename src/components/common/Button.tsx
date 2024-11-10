import React from "react";

interface ButtonProps {
  title: string;
  onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, onPress }) => {
  return (
    <button
      onClick={onPress}
      className="flex items-center justify-center text-center"
    >
      {title}
    </button>
  );
};

export default Button;
