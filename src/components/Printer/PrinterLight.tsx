function PrinterLight({ isPrinting }: { isPrinting: boolean }) {
  return <div className={`print-light ${isPrinting ? "wait" : ""}`} />;
}

export default PrinterLight;
