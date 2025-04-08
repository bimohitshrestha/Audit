import React from "react";
import { FaArrowRight } from "react-icons/fa6";

interface ButtonTextInterface {
  name: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

const ButtonText: React.FC<ButtonTextInterface> = ({
  name,
  onClick,
  type = "button",
}) => {
  return (
    <button
      className="bg-level hover:bg-[#180447ce]  text-white px-4 py-2 md:px-4 md:py-2 overflow-hidden lg:px-6 lg:py-3 rounded-lg   transition duration-300 cursor-pointer  mt-4 sm:mt-0 sm:ml-6 "
      onClick={onClick}
      type={type}
    >
      {name}
    </button>
  );
};

export default ButtonText;
