import React from "react";
import { faqList, AccodionProps } from "../../data/accordion";
import AccordionItem from "./AccordionItem";
const AccordionList = () => {
  return (
    <ul className="accordionList">
      {faqList.map((item: AccodionProps) => {
        return <AccordionItem item={item} key={item.id} />;
      })}
    </ul>
  );
};

export default AccordionList;
