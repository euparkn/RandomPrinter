function PrinterCounter({
  count = 0,
  max = 0,
}: {
  count?: number;
  max?: number;
}) {
  return (
    <div className="print-counter">
      {count} / {max}
    </div>
  );
}

export default PrinterCounter;
