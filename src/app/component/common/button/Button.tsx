import React from "react";
import { FaArrowRight } from "react-icons/fa6";

interface ButtonInterface {
  name: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  required: boolean;
}

const Button: React.FC<ButtonInterface> = ({
  name,
  onClick,
  type = "button",
  required,
}) => {
  return (
    <button
      className="flex items-center gap-3 px-6 py-3 rounded-4xl border-1 border-black text-black  hover:bg-blue-100 mt-5 lg:mt-0"
      onClick={onClick}
      type={type}
    >
      {name}
      {required && <FaArrowRight className="w-4 h-4" />}
    </button>
  );
};

export default Button;
