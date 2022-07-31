import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/css";
import DatePickerIcon from "../styled/icon/DatePickerIcon";

type DatePickerListProps = {
  list: number[];
  todayDate: number;
  today: number;
  year: number;
  month: number;
};

const week = new Array("일", "월", "화", "수", "목", "금", "토", "일");
const getWeekToDay = (year: number, month: number, day: number) => {
  return week[new Date(`${year}-${month}-${day}`).getDay()];
};

const DatePickerList = ({
  list,
  todayDate,
  year,
  month,
}: DatePickerListProps) => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperCore>();
  const [selectDay, setSelectDay] = useState<number>(todayDate - 1);
  const [stop, setStop] = useState(false);
  const onClick = (num: number) => {
    setSelectDay(num);
  };
  const handleCategory = (activeIndex: number) => {};
  useEffect(() => {
    swiperInstance?.slideTo(selectDay);
    console.log(selectDay);
  }, [swiperInstance, selectDay]);
  return (
    <div className="DatePicker">
      <Swiper
        slidesPerView={"auto"}
        className="datePicker"
        onSwiper={setSwiperInstance}
        onSlideChange={(swiper) => handleCategory(swiper.activeIndex)}
      >
        {list.map((item: number, i: number) => (
          <SwiperSlide key={i} onClick={(e) => onClick(i)}>
            <div className={selectDay === i ? "datePickerList" : undefined}>
              <span className="ko">{getWeekToDay(year, month, item)}</span>
              <span className="num">{item}</span>
              {selectDay === i && <DatePickerIcon />}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DatePickerList;
