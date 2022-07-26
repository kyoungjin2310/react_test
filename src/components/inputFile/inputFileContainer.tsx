import React from "react";
import Layout from "../styled/Layout";
import SubTitle from "../styled/SubTitle";
import InputFileImage from "./InputFileImage";
import { List } from "../../data/inputFile";
import InputFileList from "./InputFileList";
const InputFileContainer = () => {
  return (
    <Layout title="Input File" className="inputFile">
      <>
        <SubTitle title={List.title} />
        <InputFileImage />
        <InputFileList />
      </>
    </Layout>
  );
};

export default InputFileContainer;
