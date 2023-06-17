import { useEffect, useState } from "react";

export const usePrinter = (animation: boolean) => {
  const [isPrinting, setIsPrinting] = useState(false);

  const [count, setCount] = useState(0);
  const [PaperStatus, setPaperStatus] = useState<boolean | undefined>();

  const printLoader = () => {
    if (!animation) {
      return;
    }
    setIsPrinting(true);
    setTimeout(() => {
      setIsPrinting(false);
    }, 2000);
  };

  const print = () => {
    setPaperStatus(false);
    setCount((prev) => prev + 1);
    printLoader();
  };

  useEffect(() => {
    printLoader();
  }, [animation]);

  const reset = () => {
    setCount(0);
    setPaperStatus(undefined);
  };

  useEffect(() => {
    if (PaperStatus === false) {
      setPaperStatus(true);
    }
  }, [PaperStatus]);

  return { count, PaperStatus, isPrinting, print, reset };
};
