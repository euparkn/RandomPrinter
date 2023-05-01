import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { produce } from "immer";
import { IListItem } from "../../../types/listItemTypes";
import { listStateAtom } from "../../../store";

const useListState = () => {
  const [listState, setListState] = useRecoilState(listStateAtom);

  const arrayFromMap = useCallback((map: Map<number, IListItem>) => {
    const array: IListItem[] = [];
    map.forEach((val: IListItem, key: number) => {
      array.push({ id: key, text: val.text, count: val.count });
    });
    return array;
  }, []);

  const remove = useCallback(({ id }: IListItem) => {
    setListState((prev) => {
      const removedMap = produce(prev, (draft) => {
        draft.delete(id);
      });
      return removedMap;
    });
  }, []);

  const update = useCallback(({ id, text, count }: IListItem) => {
    setListState((prev) => {
      const addedMap = produce(prev, (draft) => {
        draft.set(id, { text, count });
      });
      return addedMap;
    });
  }, []);

  return { listState, arrayFromMap, update, remove };
};

export default useListState;
