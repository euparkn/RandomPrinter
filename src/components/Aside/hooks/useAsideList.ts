import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { IAsideListItem } from "../../../types/listItemTypes";
import { asideListAtom } from "../../../store";

const useAsideList = () => {
  const [asideList, setAsideList] = useRecoilState(asideListAtom);

  const createListItem = useCallback(() => {
    setAsideList((prev) => {
      const addedMap = structuredClone(prev);
      addedMap.push({ id: Date.now(), text: "", count: 1 });
      return addedMap;
    });
  }, []);

  const removeListItem = useCallback(({ id }: { id: number }) => {
    setAsideList((prev) => {
      const removedMap = structuredClone(prev);
      removedMap.filter((e: IAsideListItem) => e.id !== id);
      return removedMap;
    });
  }, []);

  const updateListItem = useCallback(({ id, text, count }: IAsideListItem) => {
    setAsideList((prev) => {
      const updatedMap = structuredClone(prev);
      const item = updatedMap.find((e: IAsideListItem) => e.id === id);
      item.text = text;
      item.count = count;
      return updatedMap;
    });
  }, []);

  return {
    asideList,
    createListItem,
    updateListItem,
    removeListItem,
  };
};

export default useAsideList;
