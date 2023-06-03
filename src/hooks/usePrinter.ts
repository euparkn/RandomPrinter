import { useRecoilState } from "recoil";
import { isPrintingAtom } from "../store";

export const usePrinter = () => {
  const [isPrinting, setIsPrinting] = useRecoilState(isPrintingAtom);

  const printLoader = () => {
    setIsPrinting(true);
    setTimeout(() => {
      setIsPrinting(false);
    }, 2000);
  };

  return { isPrinting, printLoader };
};
