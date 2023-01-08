import React from "react";

export const Layout = ({ children }) => {
  return (
    <div className={`mb-3 mx-0`}>
      { children }
    </div>
  );
};