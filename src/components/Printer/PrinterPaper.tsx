import React from "react";

interface IProps {
  text?: string;
  status?: boolean;
  animation?: boolean;
  ariaHidden?: boolean;
}

function PrinterPaper({ text, status, animation, ariaHidden }: IProps) {
  return (
    <div
      className={`printer-paper ${status ? "done" : ""} ${
        animation ? "animation" : ""
      }`}
      aria-hidden={ariaHidden}
    >
      {text}
    </div>
  );
}

export default React.memo(PrinterPaper);
