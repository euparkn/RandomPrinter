import { useRecoilState } from "recoil";
import { IAsideOption } from "../types/AsideTypes";
import { asideOptionAtom } from "../store";

export const useAsideOption = () => {
  const [asideOption, setAsideOption] = useRecoilState(asideOptionAtom);

  const updateAsideOption = (value: IAsideOption) => {
    setAsideOption({ ...asideOption, ...value });
  };

  return { asideOption, updateAsideOption };
};
