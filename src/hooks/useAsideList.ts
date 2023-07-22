import { useCallback } from "react";
import { SetterOrUpdater } from "recoil";

import { IAsideListItem } from "../types/listItemTypes";

const useAsideList = (setAsideList: SetterOrUpdater<IAsideListItem[]>) => {
  const createListItem = useCallback(() => {
    setAsideList((prev) => {
      const addedList = structuredClone(prev);
      addedList.push({ id: Date.now(), text: "", count: 1 });
      return addedList;
    });
  }, []);

  const removeListItem = useCallback(({ id }: { id: number }) => {
    setAsideList((prev) => {
      const removedList = structuredClone(prev);
      return removedList.filter((e: IAsideListItem) => e.id !== id);
    });
  }, []);

  const updateListItem = useCallback(({ id, text, count }: IAsideListItem) => {
    setAsideList((prev) => {
      const updatedList = structuredClone(prev);
      const item = updatedList.find((e: IAsideListItem) => e.id === id);
      if (item) {
        item.text = text;
        item.count = count;
      }
      return updatedList;
    });
  }, []);

  return {
    createListItem,
    updateListItem,
    removeListItem,
  };
};

export default useAsideList;
