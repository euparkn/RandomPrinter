function PrinterPaper({ text }: { text?: string }) {
  return <div className={`printer-paper ${text ? "done" : ""}`}>{text}</div>;
}

export default PrinterPaper;
