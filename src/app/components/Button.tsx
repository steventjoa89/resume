import React from "react";

type ButtonProps = {
  label: string;
  submit?: boolean;
  className?: string;
};

function Button({ label, submit = false, className = "" }: ButtonProps) {
  return (
    <button
      type={submit ? "submit" : "button"}
      className={`bg-rose-500 hover:bg-rose-500/90 transition text-white px-10 py-3 rounded-md cursor-pointer ${className}`}
    >
      {label}
    </button>
  );
}

export default Button;
