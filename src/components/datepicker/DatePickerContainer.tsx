import React, { useState, useEffect } from "react";
import Btn from "../styled/icon/Btn";
import Layout from "../styled/Layout";
import DatePickerList from "./DatePickerList";

const d = new Date();
const month = d.getMonth() + 1;
const todayDate = d.getDate();
const today = d.getDay();
const year = d.getFullYear();

//get day
const getDaysInMonth = function (month: number, year: number) {
  return new Date(year, month, 0).getDate();
};

const dateDay = getDaysInMonth(month, year);
const dateArray = function (dateDay: number) {
  return [...Array(dateDay)].map((x, i) => i + 1);
};
const DatePickerContainer = () => {
  const [dateYear, setDateYear] = useState(year);
  const [dateMonth, setDateMonth] = useState(month);
  const [dateDateArray, setDateArray] = useState(dateArray(dateDay));
  const prev = () => {
    setDateMonth((dateMonth) =>
      dateMonth === 1 ? (dateMonth = 12) : --dateMonth
    );
    if (dateMonth === 1) {
      setDateYear(dateYear - 1);
    }
  };
  const next = () => {
    if (dateMonth > 11) {
      setDateYear(dateYear + 1);
    }
    setDateMonth((dateMonth) =>
      dateMonth === 12 ? (dateMonth = 1) : ++dateMonth
    );
  };

  useEffect(() => {}, []);

  return (
    <Layout title="날짜 선택" className="datepicker">
      <>
        <h2 className="datepickerTitle">날짜 선택</h2>
        <div className="dateMonthWrap">
          <Btn text="이전달" onClick={prev} />
          <h3 className="dateMonth">{`${dateMonth}월`}</h3>
          <Btn text="다음달" onClick={next} customClass="next" />
        </div>
        <DatePickerList
          list={dateDateArray}
          todayDate={todayDate}
          today={today}
          year={dateYear}
          month={dateMonth}
        />
      </>
    </Layout>
  );
};

export default DatePickerContainer;
