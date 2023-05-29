import { useEffect, useState } from "react";

import TextButton from "../_Atoms/TextButton";
import PrinterCounter from "./PrinterCounter";
import PrinterInfoBox from "./PrinterInfoBox";
import PrinterLight from "./PrinterLight";
import PrinterPaper from "./PrinterPaper";

const Info = Object.assign(PrinterInfoBox, {
  Counter: PrinterCounter,
  Light: PrinterLight,
});

function Printer() {
  const [count, setCount] = useState(0);
  const [status, setStatus] = useState<boolean | undefined>();

  const useList = [""];

  const max = useList.length - 1;

  useEffect(() => {
    if (status === false) {
      setStatus(true);
    }
  }, [status]);

  const print = () => {
    setStatus(false);
    setCount((prev) => prev + 1);
  };

  return (
    <div className="printer">
      <div className="printer-box" />
      <div className="printer-body">
        <TextButton text="Print" onClick={print} disabled={count === max} />
        <Info>
          <Info.Counter count={count} max={max} />
          <Info.Light />
        </Info>
      </div>
      <div className="printer-body-behind" />
      {count !== max && <PrinterPaper text={useList[count]} />}
      {count >= 1 && <PrinterPaper text={useList[count - 1]} status />}
      <PrinterPaper text={useList[count]} status={status} />
    </div>
  );
}

export default Printer;
