import React from "react";
import Layout from "../styled/Layout";
import SubTitle from "../styled/SubTitle";
import TimePickerSelector from "./TimePickerList";

const TimePickerContainer = () => {
  return (
    <Layout title="Timepicker" className="timepicker">
      <>
        <SubTitle title="운영 시간 설정" />
        <TimePickerSelector />
      </>
    </Layout>
  );
};

export default TimePickerContainer;
