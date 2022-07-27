import React from "react";
import "./asset/scss/style.scss";
import { Route } from "react-router-dom";
import InputFile from "./pages/InputFile";
import Accordion from "./pages/Accordion";
function App() {
  return (
    <>
      <Route path="/inputFile" component={InputFile} />
      <Route path="/accordion" component={Accordion} />
    </>
  );
}

export default App;
