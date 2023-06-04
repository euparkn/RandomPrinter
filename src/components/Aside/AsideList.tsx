import React, { useEffect, useRef } from "react";

import { useRecoilState } from "recoil";

import useAsideList from "../../hooks/useAsideList";

import AsideListItem from "./AsideListItem";
import CircleButton from "../_Atoms/CircleButton";

import { IAsideListItem } from "../../types/listItemTypes";
import { printerListAtom } from "../../store";
import { setFormatList } from "../../utils/printerUtils";
import TextButton from "../_Atoms/TextButton";

import { ReactComponent as AddIcon } from "../../assets/icons/add.svg";

function AsideList() {
  const { asideList, createListItem, updateListItem, removeListItem } =
    useAsideList();

  const [printerList, setPrinterList] = useRecoilState(printerListAtom);

  const listRef = useRef<HTMLDivElement>(null);

  const scroll = () => {
    listRef.current?.scrollTo(0, listRef.current.scrollHeight);
  };

  useEffect(() => {
    scroll();
  }, [asideList.length]);

  return (
    <div className="aside-list">
      <div className="aside-list-header">
        <TextButton
          text="Set Printer"
          onClick={() => setPrinterList(setFormatList(asideList))}
          color="#f39c12"
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
        <div className="aside-list-item">
          <CircleButton onClick={createListItem} backgroundColor="#5499c7">
            <AddIcon fill="#fff" />
          </CircleButton>
        </div>
      </div>
    </div>
  );
}

export default React.memo(AsideList);
