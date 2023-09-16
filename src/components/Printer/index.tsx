import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";

import { ReactComponent as PrintIcon } from "assets/icons/print.svg";

import { optionsAtom, printerListAtom } from "store";
import { usePrinter } from "hooks/usePrinter";

import CircleButton from "components/_Atoms/CircleButton";
import PrinterCounter from "components/Printer/PrinterCounter";
import PrinterInfoBox from "components/Printer/PrinterInfoBox";
import PrinterLight from "components/Printer/PrinterLight";
import PrinterPaper from "components/Printer/PrinterPaper";
import PrinterBlock from "components/Printer/PrinterBlock";

const Info = Object.assign(PrinterInfoBox, {
  Counter: PrinterCounter,
  Light: PrinterLight,
});

function Printer() {
  const options = useRecoilValue(optionsAtom);
  const printerList = useRecoilValue(printerListAtom);
  const max = printerList.length;

  const { count, PaperStatus, isPrinting, print, reset } = usePrinter(
    options.animation ?? false
  );

  useEffect(() => {
    reset();
  }, [printerList]);

  return (
    <div className="printer">
      <PrinterBlock position="box" />
      <PrinterBlock position="body">
        <CircleButton
          onClick={print}
          disabled={count === max}
          backgroundColor={isPrinting ? "#aaa" : "#f8f8f8"}
          label="Print"
        >
          <PrintIcon fill="#444" />
        </CircleButton>
        <Info>
          <Info.Counter count={count} max={max} />
          <Info.Light isPrinting={isPrinting} />
        </Info>
      </PrinterBlock>
      <PrinterBlock position="body-behind" />
      {count !== max && <PrinterPaper text={printerList[count]} ariaHidden />}
      {count > 1 && (
        <PrinterPaper text={printerList[count - 2]} status ariaHidden />
      )}
      {max !== 0 && (
        <PrinterPaper
          text={printerList[count - 1]}
          status={PaperStatus}
          animation={options.animation}
        />
      )}
    </div>
  );
}

export default React.memo(Printer);
