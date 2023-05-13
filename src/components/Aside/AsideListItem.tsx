import React from "react";
import CircleButton from "../_Atoms/CircleButton";
import TextInput from "../_Atoms/TextInput";
import Counter from "../_Molecules/Counter";
import { IAsideListItemExtra } from "../../types/listItemTypes";

function AsideListItem({
  id,
  text,
  count = 1,
  updateListItem,
  removeListItem,
}: IAsideListItemExtra) {
  return (
    <div className="aside-list-item">
      <CircleButton iconType="close" onClick={() => removeListItem({ id })} />
      <TextInput
        value={text}
        onChange={(value) => updateListItem({ id, text: value, count })}
      />
      <Counter
        state={count}
        setState={(value) => updateListItem({ id, text, count: value })}
      />
    </div>
  );
}

export default React.memo(AsideListItem);
