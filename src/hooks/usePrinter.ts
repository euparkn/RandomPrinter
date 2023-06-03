import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { isPrintingAtom } from "../store";

export const usePrinter = () => {
  const [isPrinting, setIsPrinting] = useRecoilState(isPrintingAtom);

  const [count, setCount] = useState(0);
  const [PaperStatus, setPaperStatus] = useState<boolean | undefined>();

  const printLoader = () => {
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
