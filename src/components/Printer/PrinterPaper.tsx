import { useRecoilValue } from "recoil";
import { asideOptionAtom } from "../../store";

function PrinterPaper({ text, status }: { text?: string; status?: boolean }) {
  const asideOption = useRecoilValue(asideOptionAtom);

  return (
    <div
      className={`printer-paper ${status ? "done" : ""} ${
        asideOption.animation ? "animation" : ""
      }`}
    >
      {text}
    </div>
  );
}

export default PrinterPaper;
