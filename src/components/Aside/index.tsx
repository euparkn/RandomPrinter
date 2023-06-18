import React, { useMemo } from "react";
import { useRecoilValue } from "recoil";

import { ReactComponent as PrintAddIcon } from "../../assets/icons/print_add.svg";

import { ReactComponent as AddIcon } from "../../assets/icons/add.svg";

import { IAsideListItem } from "../../types/listItemTypes";

import { showAsideAtom } from "../../store";

import useAsideList from "../../hooks/useAsideList";
import { useScrollWithList } from "../../hooks/useScrollWithList";

import TextButton from "../_Atoms/TextButton";
import CircleButton from "../_Atoms/CircleButton";
import Options from "../_Molecules/Options";
import AsideHeader from "./AsideHeader";
import AsideListItem from "./AsideListItem";

function Aside() {
  const showAside = useRecoilValue(showAsideAtom);
  const {
    asideList,
    createListItem,
    updateListItem,
    removeListItem,
    addPrinter,
  } = useAsideList();

  const listRef = useScrollWithList(asideList);

  const addButton = useMemo(
    () => (
      <CircleButton onClick={createListItem} backgroundColor="#fff">
        <AddIcon fill="#5499c7" />
      </CircleButton>
    ),
    [createListItem]
  );

  return (
    <div className={`aside ${showAside ? "" : "hide"}`}>
      <AsideHeader>
        {asideList.length < 20 && addButton}
        <TextButton
          icon={<PrintAddIcon fill="#fff" />}
          text="Save"
          onClick={addPrinter}
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
