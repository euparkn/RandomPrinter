import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { produce } from "immer";
import { IAsideListItem } from "../../../types/listItemTypes";
import { asideListAtom } from "../../../store";

const useAsideList = () => {
  const [asideList, setAsideList] = useRecoilState(asideListAtom);

  const arrayFromMap = useCallback((map: Map<number, IAsideListItem>) => {
    const array: IAsideListItem[] = [];
    map.forEach((val: IAsideListItem, key: number) => {
      array.push({ id: key, text: val.text, count: val.count });
    });
    return array;
  }, []);

  const removeAsideList = useCallback(({ id }: IAsideListItem) => {
    setAsideList((prev) => {
      const removedMap = produce(prev, (draft) => {
        draft.delete(id);
      });
      return removedMap;
    });
  }, []);

  const updateAsideList = useCallback(({ id, text, count }: IAsideListItem) => {
    setAsideList((prev) => {
      const addedMap = produce(prev, (draft) => {
        draft.set(id, { text, count });
      });
      return addedMap;
    });
  }, []);

  return { asideList, arrayFromMap, updateAsideList, removeAsideList };
};

export default useAsideList;
