import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { optionsAtom } from "../store";

export const usePrinter = () => {
  const [isPrinting, setIsPrinting] = useState(false);
  const options = useRecoilValue(optionsAtom);

  const [count, setCount] = useState(0);
  const [PaperStatus, setPaperStatus] = useState<boolean | undefined>();

  const printLoader = () => {
    if (!options.animation) {
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
  }, [options.animation]);

  const reset = () => {
    setCount(0);
    setPaperStatus(undefined);
  };

  useEffect(() => {
    if (PaperStatus === false) {
      setPaperStatus(true);
    }
  }, [PaperStatus]);

  return { count, PaperStatus, isPrinting, print, reset, options };
};
