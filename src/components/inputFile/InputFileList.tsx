import React from "react";
import { List } from "../../data/inputFile";

const InputFileList = () => {
  return (
    <article>
      <ul className="inputFileList">
        {List.content.map((item: string, idx: number) => {
          return <li key={idx}>{item}</li>;
        })}
      </ul>
    </article>
  );
};

export default InputFileList;
