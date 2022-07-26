import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { List } from "../../data/inputFile";
import Camera from "../styled/icon/Camera";

const InputFileImage = () => {
  const [files, setFiles] = useState<Array<File>>([]);
  const [txt, setTxt] = useState(true);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/png": [".png"],
      "image/jpeg": [".jpg", ".jpeg"],
    },
    onDrop: (acceptedFiles: File[]) => {
      setFiles(
        acceptedFiles.map((file: File) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
      setTxt(false);
    },
  });

  const images = files.map((file: any) => (
    <div key={file.name}>
      <div>
        <img src={file.preview} alt="preview" />
      </div>
    </div>
  ));

  return (
    <article className="inputFileBox">
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {txt && (
          <div className="inputFileWrap">
            <Camera />
            <p>{List.description}</p>
          </div>
        )}
      </div>
      <div>{images}</div>
    </article>
  );
};

export default InputFileImage;
