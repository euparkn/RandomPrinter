import React, { useEffect, useRef } from "react";

import useAsideList from "./hooks/useAsideList";

import AsideListItem from "./AsideListItem";
import CircleButton from "../_Atoms/CircleButton";

import { IAsideListItem } from "../../types/listItemTypes";

function AsideList() {
  const { asideList, createListItem, updateListItem, removeListItem } =
    useAsideList();

  const listRef = useRef<HTMLDivElement>(null);

  const scroll = () => {
    listRef.current?.scrollTo(0, listRef.current.scrollHeight);
  };

  useEffect(() => {
    scroll();
  }, [asideList.length]);

  return (
    <div className="aside-list" ref={listRef}>
      {asideList.map((e: IAsideListItem) => (
        <AsideListItem
          key={e.id}
          id={e.id}
          text={e.text}
          count={e.count}
          updateListItem={updateListItem}
          removeListItem={removeListItem}
        />
      ))}
      <div className="aside-list-item">
        <CircleButton iconType="add" onClick={createListItem} />
      </div>
    </div>
  );
}

export default React.memo(AsideList);
