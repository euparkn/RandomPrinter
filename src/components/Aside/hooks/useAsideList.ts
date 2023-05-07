import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { produce } from "immer";
import { IAsideListItem } from "../../../types/listItemTypes";
import { asideListAtom } from "../../../store";

const useAsideList = () => {
  const [asideList, setAsideList] = useRecoilState(asideListAtom);

  const createAsideList = useCallback(() => {
    setAsideList((prev) => {
      const addedMap = produce(prev, (draft: IAsideListItem[]) => {
        draft.push({ id: Date.now(), text: "", count: 1 });
      });
      return addedMap;
    });
  }, []);

  const removeAsideList = useCallback(({ id }: { id: number }) => {
    setAsideList((prev) => {
      const removedMap = produce(prev, (draft: IAsideListItem[]) => {
        draft.filter((e: IAsideListItem) => e.id !== id);
      });
      return removedMap;
    });
  }, []);

  const updateAsideList = useCallback(({ id, text, count }: IAsideListItem) => {
    setAsideList((prev) => {
      const updatedMap = produce(prev, (draft: IAsideListItem[]) => {
        const test: any = draft.find((e: IAsideListItem) => e.id === id);
        test.text = text;
        test.count = count;
      });
      return updatedMap;
    });
  }, []);

  return { asideList, createAsideList, updateAsideList, removeAsideList };
};

export default useAsideList;
