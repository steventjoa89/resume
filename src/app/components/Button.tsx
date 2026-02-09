import React from "react";
import { IconType } from "react-icons";

type ButtonProps = {
  label: string;
  submit?: boolean;
  className?: string;
  icon?: IconType;
};

function Button({
  label,
  submit = false,
  className = "",
  icon: Icon,
}: ButtonProps) {
  return (
    <button
      type={submit ? "submit" : "button"}
      className={`inline-flex items-center justify-center gap-2  bg-rose-500 hover:bg-rose-500/90 transition text-white px-10 py-3 rounded-lg cursor-pointer ${className}`}
    >
      {Icon && <Icon className="text-xl" />}
      {label}
    </button>
  );
}

export default Button;
