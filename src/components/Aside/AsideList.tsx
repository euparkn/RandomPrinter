import { enableMapSet } from "immer";
import useListMap from "./hooks/useListMap";

enableMapSet();

function AsideList() {
  const { listMap, updateMapItem, removeMapItem } = useListMap();

  return <div>AsideList</div>;
}

export default AsideList;
