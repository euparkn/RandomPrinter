import React from "react";

import { ReactComponent as CloseIcon } from "../../assets/icons/close.svg";

import { IAsideListItemExtra } from "../../types/listItemTypes";

import CircleButton from "../_Atoms/CircleButton";
import TextInput from "../_Atoms/TextInput";
import Counter from "../_Molecules/Counter";

function AsideListItem({
  id,
  text,
  count = 1,
  updateListItem,
  removeListItem,
}: IAsideListItemExtra) {
  return (
    <div className="aside-list-item">
      <CircleButton
        onClick={() => removeListItem({ id })}
        backgroundColor="#e67e22"
      >
        <CloseIcon fill="#fff" />
      </CircleButton>
      <TextInput
        value={text}
        onChange={(value) => updateListItem({ id, text: value, count })}
        maxLength={30}
      />
      <Counter
        state={count}
        setState={(value) => updateListItem({ id, text, count: value })}
      />
    </div>
  );
}

export default React.memo(AsideListItem);
