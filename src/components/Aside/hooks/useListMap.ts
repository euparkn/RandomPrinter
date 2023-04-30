import { produce } from "immer";
import { useState } from "react";
import { IListItem } from "../../../types/listItemTypes";

const useListMap = () => {
  const [listMap, setListMap] = useState(new Map());

  const removeMapItem = ({ id }: IListItem) => {
    const removedMap = produce(listMap, (draft) => {
      draft.delete(id);
    });
    setListMap(removedMap);
  };

  const updateMapItem = ({ id, text, count }: IListItem) => {
    const addedMap = produce(listMap, (draft) => {
      draft.set(id, { text, count });
    });
    setListMap(addedMap);
  };

  return { listMap, updateMapItem, removeMapItem };
};

export default useListMap;
