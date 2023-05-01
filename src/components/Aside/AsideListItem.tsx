import React from "react";
import CircleButton from "../_Atoms/CircleButton";
import TextInput from "../_Atoms/TextInput";
import Counter from "../_Molecules/Counter";
import { IListItemExtra } from "../../types/listItemTypes";

function AsideListItem({
  id,
  text,
  count = 1,
  update,
  remove,
}: IListItemExtra) {
  return (
    <div className="aside-list-item">
      <CircleButton iconType="close" onClick={() => remove({ id })} />
      <TextInput
        value={text}
        onChange={(e) => update({ id, text: e, count })}
      />
      <Counter
        state={count}
        setState={(e: number) => update({ id, text, count: e })}
      />
    </div>
  );
}

export default React.memo(AsideListItem);
