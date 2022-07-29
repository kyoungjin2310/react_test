import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
type TimePickerItemProps = {
  itemArr: (string | number)[];
  keyName: string;
  index: number;
};

const TimePickerItem = ({ itemArr, keyName, index }: TimePickerItemProps) => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperCore>();

  useEffect(() => {
    swiperInstance?.slideTo(index);
  });

  return (
    <div className="timeWrap">
      <Swiper
        direction={"vertical"}
        slidesPerView={3}
        centeredSlides={true}
        className={`${keyName}`}
        onSwiper={setSwiperInstance}
        loop={keyName === "minutesT" ? true : false}
      >
        {itemArr.map((item: string | number, i: number) => (
          <SwiperSlide key={i}>
            <span>{item}</span>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TimePickerItem;
