import React from "react";

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
      className="bg-level  text-white px-6 py-3 rounded-lg transition duration-300 cursor-pointer"
      onClick={onClick}
      type={type}
    >
      {name}
    </button>
  );
};

export default ButtonText;
