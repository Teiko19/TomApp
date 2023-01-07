import React from "react";

export const Main = ({ children, className }) => {
  return (
    <div className={`mb-3 mx-0 ${className}`}>
      { children }
    </div>
  );
};