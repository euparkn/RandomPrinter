import React from "react";

function PrinterPaper({
  text,
  status,
  animation,
}: {
  text?: string;
  status?: boolean;
  animation?: boolean;
}) {
  return (
    <div
      className={`printer-paper ${status ? "done" : ""} ${
        animation ? "animation" : ""
      }`}
    >
      {text}
    </div>
  );
}

export default React.memo(PrinterPaper);
