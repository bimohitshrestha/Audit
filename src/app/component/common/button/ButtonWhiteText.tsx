import React from "react";

interface ButtonWhiteTextInterface {
  name: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

const ButtonWhiteText: React.FC<ButtonWhiteTextInterface> = ({
  name,
  onClick,
  type = "button",
}) => {
  return (
    <button
      className="bg-white  text-black hover:bg-black hover:text-white px-6 py-3 rounded-lg transition duration-300 cursor-pointer"
      onClick={onClick}
      type={type}
    >
      {name}
    </button>
  );
};

export default ButtonWhiteText;
