import { useRecoilState } from "recoil";
import { asideOptionAtom } from "../store";
import { IAsideOption } from "../types/AsideTypes";

export const useAsideOption = () => {
  const [asideOption, setAsideOption] = useRecoilState(asideOptionAtom);

  const updateAsideOption = (value: IAsideOption) => {
    setAsideOption({ ...asideOption, ...value });
  };

  return { updateAsideOption };
};
