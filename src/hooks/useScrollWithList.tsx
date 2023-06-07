import { useEffect, useRef, useState } from "react";
import { IAsideListItem } from "../types/listItemTypes";

export const useScrollWithList = (list: (IAsideListItem | unknown)[]) => {
  const listRef = useRef<HTMLDivElement>(null);

  const [prevLength, setPrevLength] = useState(() => list.length);

  const scroll = () => {
    listRef.current?.scrollTo(0, listRef.current.scrollHeight);
  };

  useEffect(() => {
    if (prevLength < list.length) {
      scroll();
    }
    setPrevLength(list.length);
  }, [list.length]);

  return listRef;
};
