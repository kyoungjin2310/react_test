import React from "react";
type LayoutProps = {
  title: string;
  className: string;
  children: JSX.Element;
};
const Layout = ({ title, className, children }: LayoutProps) => {
  return (
    <section className={`layout ${className}`}>
      <h1 className="layoutTitle">{title}</h1>
      {children}
    </section>
  );
};

export default Layout;
