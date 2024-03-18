import React from "react";

type ButtonProps = {
  children: string;
  onClickFunction: () => void;
  fullWidth?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClickFunction,
  fullWidth,
}) => {
  const buttonClasses = `bg-gray-900 py-2 ${
    fullWidth ? "w-full" : "w-48"
  } col-span-full mx-auto rounded`;

  return (
    <button onClick={onClickFunction} className={buttonClasses}>
      {children}
    </button>
  );
};

export default Button;
