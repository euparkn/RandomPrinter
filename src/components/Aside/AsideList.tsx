import React from "react";
import { enableMapSet } from "immer";
import useListMap from "./hooks/useListMap";
import AsideListItem from "./AsideListItem";
import CircleButton from "../_Atoms/CircleButton";
import { IListItem } from "../../types/listItemTypes";

enableMapSet();

function AsideList() {
  const { listState, arrayFromMap, update, remove } = useListMap();

  return (
    <div className="aside-list">
      {arrayFromMap(listState)?.map((e: IListItem) => (
        <AsideListItem
          key={e.id}
          id={e.id}
          text={e.text}
          count={e.count}
          update={update}
          remove={remove}
        />
      ))}
      <CircleButton
        iconType="add"
        onClick={() => update({ id: Date.now(), text: "", count: 1 })}
      />
    </div>
  );
}

export default React.memo(AsideList);
