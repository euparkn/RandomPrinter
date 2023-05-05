import React from "react";
import CircleButton from "../_Atoms/CircleButton";
import TextInput from "../_Atoms/TextInput";
import Counter from "../_Molecules/Counter";
import { IAsideListItemExtra } from "../../types/listItemTypes";

function AsideListItem({
  id,
  text,
  count = 1,
  updateAsideList,
  removeAsideList,
}: IAsideListItemExtra) {
  return (
    <div className="aside-list-item">
      <CircleButton iconType="close" onClick={() => removeAsideList({ id })} />
      <TextInput
        value={text}
        onChange={(value) => updateAsideList({ id, text: value, count })}
      />
      <Counter
        state={count}
        setState={(value) => updateAsideList({ id, text, count: value })}
      />
    </div>
  );
}

export default React.memo(AsideListItem);
