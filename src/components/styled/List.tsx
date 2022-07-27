import React, { useState } from "react";
import Arrow from "./icon/Arrow";
type ListProps = {
  title: string;
  html: string;
};

const List = ({ title, html }: ListProps) => {
  const [open, setOpen] = useState(false);
  const onToggle = () => {
    setOpen(!open);
  };
  return (
    <li className={open ? "on" : undefined}>
      <h3 className="listTitle" onClick={onToggle}>
        <span>{title}</span>
        <Arrow />
      </h3>
      {open && (
        <div
          className="listBox"
          dangerouslySetInnerHTML={{ __html: html }}
        ></div>
      )}
    </li>
  );
};

export default List;
