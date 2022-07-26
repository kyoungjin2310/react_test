import React from "react";
type SubTitleProps = {
  title: string;
};
const SubTitle = ({ title }: SubTitleProps) => {
  return <h2 className="layoutTitle2">{title}</h2>;
};

export default SubTitle;
