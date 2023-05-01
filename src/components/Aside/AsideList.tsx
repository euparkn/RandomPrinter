import React from "react";
import { enableMapSet } from "immer";
import useListMap from "./hooks/useListMap";

enableMapSet();

function AsideList() {
  const { listState, arrayFromMap, update, remove } = useListMap();

  return <div>AsideList</div>;
}

export default React.memo(AsideList);
