import React from "react";

const Arrow = () => {
  return (
    <span className="arrow">
      <svg width="13" height="7" viewBox="0 0 13 7">
        <g fill="none" fillRule="evenodd">
          <g className="color">
            <g>
              <g>
                <path
                  d="M340.792 27.2l-5.292 5.137-5.292-5.136c-.275-.268-.723-.268-1 0-.134.13-.208.304-.208.489 0 .184.074.358.208.488l5.792 5.62c.134.13.312.202.5.202.191 0 .369-.073.5-.201l5.792-5.62c.135-.131.208-.305.208-.49 0-.184-.073-.358-.208-.488-.276-.268-.724-.268-1 0z"
                  transform="translate(-329 -349) translate(0 95) translate(0 227)"
                />
              </g>
            </g>
          </g>
        </g>
      </svg>
    </span>
  );
};

export default Arrow;
