import React from "react";

import { useSetRecoilState } from "recoil";

import useAsideList from "../../hooks/useAsideList";

import AsideListItem from "./AsideListItem";
import CircleButton from "../_Atoms/CircleButton";

import { IAsideListItem } from "../../types/listItemTypes";
import { printerListAtom } from "../../store";
import { setFormatList } from "../../utils/printerUtils";
import TextButton from "../_Atoms/TextButton";

import { ReactComponent as AddIcon } from "../../assets/icons/add.svg";
import AsideOption from "./AsideOption";
import { useScrollWithList } from "../../hooks/useScrollWithList";

function Aside() {
  const { asideList, createListItem, updateListItem, removeListItem } =
    useAsideList();
  const setPrinterList = useSetRecoilState(printerListAtom);
  const listRef = useScrollWithList(asideList);

  return (
    <div className="aside">
      <div className="aside-list-header">
        {asideList.length < 20 && (
          <CircleButton onClick={createListItem} backgroundColor="#fff">
            <AddIcon fill="#5499c7" />
          </CircleButton>
          // <TextButton
          //   text="Add"
          //   onClick={createListItem}
          //   backgroundColor="#fff"
          //   color="#5499c7"
          // >
          //   <AddIcon fill="#5499c7" />
          // </TextButton>
        )}
        <TextButton
          text="Set Printer"
          onClick={() => setPrinterList(setFormatList(asideList))}
          backgroundColor="#5499c7"
          color="#fff"
        />
      </div>
      <div className="aside-list-content" ref={listRef}>
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
      </div>
      <AsideOption />
    </div>
  );
}

export default React.memo(Aside);
