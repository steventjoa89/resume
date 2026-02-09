import React from "react";

function Container({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      id={id}
      className={`w-full mx-auto px-4 sm:px-6 lg:px-8 
  max-w-xl sm:max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl 2xl:max-w-360
  py-10 ${className}`}
    >
      {children}
    </div>
  );
}

export default Container;
