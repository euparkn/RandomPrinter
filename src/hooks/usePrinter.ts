import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { asideOptionAtom, isPrintingAtom } from "../store";

export const usePrinter = () => {
  const [isPrinting, setIsPrinting] = useRecoilState(isPrintingAtom);
  const asideOption = useRecoilValue(asideOptionAtom);

  const [count, setCount] = useState(0);
  const [PaperStatus, setPaperStatus] = useState<boolean | undefined>();

  const printLoader = () => {
    if (!asideOption.animation) {
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
  }, [asideOption.animation]);

  const reset = () => {
    setCount(0);
    setPaperStatus(undefined);
  };

  useEffect(() => {
    if (PaperStatus === false) {
      setPaperStatus(true);
    }
  }, [PaperStatus]);

  return { count, PaperStatus, isPrinting, print, reset, asideOption };
};
