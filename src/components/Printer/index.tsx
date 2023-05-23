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
  return (
    <div className="printer">
      <div className="printer-box" />
      <div className="printer-body">
        <TextButton text="Print" />
        <Info>
          <Info.Counter />
          <Info.Light />
        </Info>
      </div>
      <div className="printer-body-behind" />
      <PrinterPaper text="Sample" />
    </div>
  );
}

export default Printer;
