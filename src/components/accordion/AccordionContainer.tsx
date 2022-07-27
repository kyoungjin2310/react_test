import React from "react";
import Layout from "../styled/Layout";
import AccordionList from "./AccordionList";
const AccordionContainer = () => {
  return (
    <Layout title="아코디언" className="accordion">
      <>
        <h2 className="accordionTitle">자주 묻는 질문</h2>
        <AccordionList />
      </>
    </Layout>
  );
};

export default AccordionContainer;
