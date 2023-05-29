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

const test = [
  {
    id: 0,
    text: "0",
    status: false,
  },
  {
    id: 1,
    text: "1",
    status: false,
  },
  {
    id: 2,
    text: "2",
    status: false,
  },
  {
    id: 3,
    text: "3",
    status: false,
  },
  {
    id: 4,
    text: "4",
    status: false,
  },
  {
    id: 5,
    text: "5",
    status: false,
  },
];

function Printer() {
  const [count, setCount] = useState(0);
  const [status, setStatus] = useState<boolean | undefined>();

  const max = test.length - 1;

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
      {count !== max && <PrinterPaper text={test[count].text} />}
      {count >= 1 && <PrinterPaper text={test[count - 1].text} status />}
      <PrinterPaper text={test[count].text} status={status} />
    </div>
  );
}

export default Printer;
