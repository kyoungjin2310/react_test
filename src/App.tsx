import React from "react";
import "./asset/scss/style.scss";
import { Route } from "react-router-dom";
import InputFile from "./pages/InputFile";
function App() {
  return (
    <>
      <Route path="/inputFile" component={InputFile} />
    </>
  );
}

export default App;
