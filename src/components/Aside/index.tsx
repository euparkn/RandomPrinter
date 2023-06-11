import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

import { ReactComponent as AddIcon } from "../../assets/icons/add.svg";

import { IAsideListItem } from "../../types/listItemTypes";

import { printerListAtom, showAsideAtom } from "../../store";

import useAsideList from "../../hooks/useAsideList";
import { useScrollWithList } from "../../hooks/useScrollWithList";

import { setFormatList } from "../../utils/printerUtils";

import TextButton from "../_Atoms/TextButton";
import CircleButton from "../_Atoms/CircleButton";
import Options from "../_Molecules/Options";
import AsideHeader from "./AsideHeader";
import AsideListItem from "./AsideListItem";

function Aside() {
  const showAside = useRecoilValue(showAsideAtom);
  const setPrinterList = useSetRecoilState(printerListAtom);
  const { asideList, createListItem, updateListItem, removeListItem } =
    useAsideList();

  const listRef = useScrollWithList(asideList);

  return (
    <div className={`aside ${showAside ? "" : "hide"}`}>
      <AsideHeader>
        {asideList.length < 20 && (
          <CircleButton onClick={createListItem} backgroundColor="#fff">
            <AddIcon fill="#5499c7" />
          </CircleButton>
        )}
        <TextButton
          text="Set Printer"
          onClick={() => setPrinterList(setFormatList(asideList))}
          backgroundColor="#5499c7"
          color="#fff"
        />
      </AsideHeader>
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
      <Options />
    </div>
  );
}

export default React.memo(Aside);
