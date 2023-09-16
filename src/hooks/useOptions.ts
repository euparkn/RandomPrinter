import { useRecoilState } from "recoil";
import { IOptions } from "types/OptionsType";
import { optionsAtom } from "store";

export const useOptions = () => {
  const [options, setOptions] = useRecoilState(optionsAtom);

  const updateOptions = (value: IOptions) => {
    setOptions({ ...options, ...value });
  };

  return { options, updateOptions };
};
