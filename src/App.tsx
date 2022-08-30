import React from "react";
import "./asset/scss/style.scss";
import { Route } from "react-router-dom";
import InputFile from "./pages/InputFile";
import Accordion from "./pages/Accordion";
import TimePicker from "./pages/TimePicker";
import DatePicker from "./pages/DatePicker";
import Main from "./pages/Main";
import Practice from "./Practice";
function App() {
  return (
    <>
      {/* <Route exact path="/" component={Main} />
      <Route path="/inputFile" component={InputFile} />
      <Route path="/accordion" component={Accordion} />
      <Route path="/timepicker" component={TimePicker} />
      <Route path="/datepicker" component={DatePicker} /> */}
      <Practice />
    </>
  );
}

export default App;
