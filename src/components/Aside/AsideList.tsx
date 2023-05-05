import React from "react";
import { enableMapSet } from "immer";

import useAsideList from "./hooks/useAsideList";

import AsideListItem from "./AsideListItem";

import CircleButton from "../_Atoms/CircleButton";

import { IAsideListItem } from "../../types/listItemTypes";

enableMapSet();

function AsideList() {
  const { asideList, arrayFromMap, updateAsideList, removeAsideList } =
    useAsideList();

  return (
    <div className="aside-list">
      {arrayFromMap(asideList)?.map((e: IAsideListItem) => (
        <AsideListItem
          key={e.id}
          id={e.id}
          text={e.text}
          count={e.count}
          updateAsideList={updateAsideList}
          removeAsideList={removeAsideList}
        />
      ))}
      <CircleButton
        iconType="add"
        onClick={() => updateAsideList({ id: Date.now(), text: "", count: 1 })}
      />
    </div>
  );
}

export default React.memo(AsideList);
