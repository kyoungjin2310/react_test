import React, { useState, useRef, MouseEvent, useEffect } from "react";
import Popup, { forwardRefHandle } from "../styled/PopUp";
import TimePickerPopup from "./TimePickerPopup";

const TimePickerSelector = () => {
  const [Time, setTime] = useState({
    openTime: "AM 08:00",
    closeTime: "PM 11:00",
  });
  const { openTime, closeTime } = Time;
  const [timeKey, setTimeKey] = useState<string>("");
  const popup = useRef<forwardRefHandle>(null);
  const onClick = (e: MouseEvent) => {
    popup.current?.open();
    const target = e.target as HTMLInputElement;
    setTimeKey(target.name);
  };

  const onClose = () => {
    popup.current?.close();
  };

  const timeParseInt = (time: string) => {
    return time.indexOf("PM") === 0
      ? `${time.substring(0, 2)} ${
          parseInt(time.substring(3, 5)) + 12
        }:${time.substring(6, 8)}`
      : time;
  };

  useEffect(() => {
    console.log(
      `운영 시작 시간 : ${timeParseInt(
        openTime
      )} \n운영 종료 시간 : ${timeParseInt(closeTime)}`
    );
  }, [Time]);

  return (
    <>
      <article>
        <form className="bullet">
          <input
            type="text"
            className="inputStyle"
            name="openTime"
            value={openTime}
            onClick={(e) => onClick(e)}
            readOnly
          />
          <input
            type="text"
            className="inputStyle closeTime"
            name="closeTime"
            value={closeTime}
            onClick={(e) => onClick(e)}
            readOnly
          />
        </form>
      </article>
      <Popup ref={popup}>
        <TimePickerPopup
          setTime={setTime}
          timeKey={timeKey}
          Time={Time}
          onClose={onClose}
          setTimeKey={setTimeKey}
        />
      </Popup>
    </>
  );
};

export default TimePickerSelector;
