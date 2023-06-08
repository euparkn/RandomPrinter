function PrinterBlock({
  position,
  children,
}: {
  position: string;
  children?: React.ReactNode;
}) {
  return <div className={`printer-${position}`}>{children}</div>;
}

export default PrinterBlock;
