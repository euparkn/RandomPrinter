import { useEffect } from "react";
import { useRecoilValue } from "recoil";

import TextButton from "../_Atoms/TextButton";
import PrinterCounter from "./PrinterCounter";
import PrinterInfoBox from "./PrinterInfoBox";
import PrinterLight from "./PrinterLight";
import PrinterPaper from "./PrinterPaper";
import { printerListAtom } from "../../store";
import { usePrinter } from "../../hooks/usePrinter";

const Info = Object.assign(PrinterInfoBox, {
  Counter: PrinterCounter,
  Light: PrinterLight,
});

function Printer() {
  const printerList = useRecoilValue(printerListAtom);
  const max = printerList.length;

  const { count, PaperStatus, isPrinting, print, reset } = usePrinter();

  useEffect(() => {
    reset();
  }, [printerList]);

  return (
    <div className="printer">
      <div className="printer-box" />
      <div className="printer-body">
        <TextButton
          text="Print"
          onClick={print}
          disabled={count === max || isPrinting}
        />
        <Info>
          <Info.Counter count={count} max={max} />
          <Info.Light isPrinting={isPrinting} />
        </Info>
      </div>
      <div className="printer-body-behind" />
      {count !== max && <PrinterPaper text={printerList[count]} />}
      {count >= 1 && <PrinterPaper text={printerList[count - 2]} status />}
      {max !== 0 && (
        <PrinterPaper text={printerList[count - 1]} status={PaperStatus} />
      )}
    </div>
  );
}

export default Printer;
