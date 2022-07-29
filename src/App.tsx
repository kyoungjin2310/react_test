import React from "react";
import "./asset/scss/style.scss";
import { Route } from "react-router-dom";
import InputFile from "./pages/InputFile";
import Accordion from "./pages/Accordion";
import TimePicker from "./pages/TimePicker";
function App() {
  return (
    <>
      <Route path="/inputFile" component={InputFile} />
      <Route path="/accordion" component={Accordion} />
      <Route path="/timepicker" component={TimePicker} />
    </>
  );
}

export default App;
