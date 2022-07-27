import React from "react";
import { AccodionProps } from "../../data/accordion";
import List from "../styled/List";
type AccordionItemProps = {
  item: AccodionProps;
};

const AccordionItem = ({ item }: AccordionItemProps) => {
  return <List title={item.title} html={item.contents} />;
};

export default AccordionItem;
