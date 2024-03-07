import React from "react";

type ButtonProps = {
  children: string;
  onClickFunction: () => void;
};

const Button: React.FC<ButtonProps> = ({ children, onClickFunction }) => {
  return (
    <button
      onClick={onClickFunction}
      className="bg-gray-900 py-2 w-48 col-span-full mx-auto rounded"
    >
      {children}
    </button>
  );
};

export default Button;
