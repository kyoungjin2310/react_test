import React, { Dispatch, SetStateAction, MouseEvent, useState } from "react";
import TimePickerItem from "./TimePickerItem";

type TimePickerPopupProps = {
  Time: { openTime: string; closeTime: string };
  setTime: Dispatch<SetStateAction<{ openTime: string; closeTime: string }>>;
  setTimeKey: React.Dispatch<React.SetStateAction<string>>;
  timeKey: string;
  onClose: () => void;
};

let hoursN = 12;
let hours = [...Array(hoursN)].map((x, i) =>
  i + 1 < 10 ? "0" + (i + 1) : i + 1
);
let minutesN = 60;
let minutes = [...Array(minutesN)].map((x, i) => (i < 10 ? "0" + i : i));
let amPm = ["AM", "PM"];

const TimePickerPopup = ({
  setTime,
  Time,
  timeKey,
  onClose,
  setTimeKey,
}: TimePickerPopupProps) => {
  const timeArr = Object.keys(Time);

  const [timeSelect, setTimeSelect] = useState(
    timeKey === "openTime"
      ? {
          amPmT: `${Time.openTime.substring(0, 2)}`,
          hoursT: `${Time.openTime.substring(3, 5)}`,
          minutesT: `${Time.openTime.substring(6, 8)}`,
        }
      : {
          amPmT: `${Time.closeTime.substring(0, 2)}`,
          hoursT: `${Time.closeTime.substring(3, 5)}`,
          minutesT: `${Time.closeTime.substring(6, 8)}`,
        }
  );
  const { amPmT, hoursT, minutesT } = timeSelect;

  const confirm = () => {
    const active = document.querySelectorAll(".swiper-slide-active span");
    setTime({
      ...Time,
      [timeKey]: `${active[0].innerHTML} ${active[1].innerHTML}:${active[2].innerHTML}`,
    });
    onClose();
  };

  const timeIndex = (number: string) => {
    return number.substring(0, 0) === "0"
      ? parseInt(number.substring(1, 2))
      : parseInt(number.substring(0, 2));
  };

  const tabEvent = (e: MouseEvent, i: number) => {
    setTimeKey(timeArr[i]);
    setTimeSelect(
      i === 0
        ? {
            amPmT: `${Time.openTime.substring(0, 2)}`,
            hoursT: `${Time.openTime.substring(3, 5)}`,
            minutesT: `${Time.openTime.substring(6, 8)}`,
          }
        : {
            amPmT: `${Time.closeTime.substring(0, 2)}`,
            hoursT: `${Time.closeTime.substring(3, 5)}`,
            minutesT: `${Time.closeTime.substring(6, 8)}`,
          }
    );
  };

  return (
    <>
      <h3 className="timePickerTitle">운영 시간 설정</h3>
      <div className="titleWrap">
        {["운영 시작", "운영 종료"].map((title, i) => (
          <h4
            key={i}
            className={`timePickerTitle2${
              i === timeArr.indexOf(timeKey) ? " on" : ""
            }`}
            onClick={(e) => tabEvent(e, i)}
          >
            {title}
          </h4>
        ))}
      </div>
      <div className="TimePickerWrap">
        <TimePickerItem
          itemArr={amPm}
          keyName="amPmT"
          index={amPmT === "AM" ? 0 : 1}
        />
        <TimePickerItem
          itemArr={hours}
          keyName="hoursT"
          index={timeIndex(hoursT) - 1}
        />
        <TimePickerItem
          itemArr={minutes}
          keyName="minutesT"
          index={timeIndex(minutesT) + 3}
        />
      </div>
      <button className="confirm" onClick={confirm}>
        확인
      </button>
    </>
  );
};

export default TimePickerPopup;
