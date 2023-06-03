import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

import TextButton from "../_Atoms/TextButton";
import PrinterCounter from "./PrinterCounter";
import PrinterInfoBox from "./PrinterInfoBox";
import PrinterLight from "./PrinterLight";
import PrinterPaper from "./PrinterPaper";
import { printerListAtom } from "../../store";

const Info = Object.assign(PrinterInfoBox, {
  Counter: PrinterCounter,
  Light: PrinterLight,
});

function Printer() {
  const printerList = useRecoilValue(printerListAtom);

  const [count, setCount] = useState(0);
  const [status, setStatus] = useState<boolean | undefined>();

  const max = printerList.length;

  const reset = () => {
    setCount(0);
    setStatus(undefined);
  };

  const print = () => {
    setStatus(false);
    setCount((prev) => prev + 1);
  };

  useEffect(() => {
    reset();
  }, [printerList]);

  useEffect(() => {
    if (status === false) {
      setStatus(true);
    }
  }, [status]);

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
      {count !== max && <PrinterPaper text={printerList[count]} />}
      {count >= 1 && <PrinterPaper text={printerList[count - 2]} status />}
      {max !== 0 && (
        <PrinterPaper text={printerList[count - 1]} status={status} />
      )}
    </div>
  );
}

export default Printer;
