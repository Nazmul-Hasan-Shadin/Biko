import React from "react";

const Container = ({ children, className }) => {
  return <div className={`${className}  px-3  lg:px-20`}>{children}</div>;
};

export default Container;
