import React from "react";
type BtnProps = {
  text: string;
  onClick: () => void;
  customClass?: string;
};
const Btn = ({ text, onClick, customClass }: BtnProps) => {
  return (
    <button
      className={customClass ? `btn ${customClass}` : "btn"}
      onClick={onClick}
    >
      <span className="btnIcon">
        <svg viewBox="0 0 20 20">
          <g fill="none" fillRule="evenodd">
            <g>
              <g transform="translate(-257 -105) translate(257 105)">
                <circle
                  cx="10"
                  cy="10"
                  r="10"
                  fill="#6E91F0"
                  opacity=".404"
                  transform="matrix(-1 0 0 1 20 0)"
                />
                <path
                  fill="#FFF"
                  stroke="#FFF"
                  strokeWidth=".3"
                  d="M11.857 5.644c.19.19.19.501 0 .692L8.188 10l3.669 3.664c.19.19.19.5 0 .692-.094.093-.218.144-.35.144-.131 0-.255-.051-.349-.144l-4.014-4.01C7.05 10.253 7 10.13 7 9.999c0-.131.052-.254.144-.345l4.014-4.01c.094-.093.218-.144.35-.144.131 0 .255.05.349.144"
                />
              </g>
            </g>
          </g>
        </svg>
      </span>
      <span className="hide">{text}</span>
    </button>
  );
};

export default Btn;
