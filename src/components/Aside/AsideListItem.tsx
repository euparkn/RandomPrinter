import React, { useEffect, useState } from "react";

import { ReactComponent as CloseIcon } from "assets/icons/close.svg";

import { IAsideListItemExtra } from "types/listItemTypes";

import CircleButton from "components/_Atoms/CircleButton";
import TextInput from "components/_Atoms/TextInput";
import Counter from "components/_Molecules/Counter";

function AsideListItem({
  id,
  text,
  count = 1,
  updateListItem,
  removeListItem,
}: IAsideListItemExtra) {
  const [debouncedValue, setDebouncedValue] = useState<string>("");

  useEffect(() => {
    const debounce = setTimeout(() => {
      updateListItem({ id, text: debouncedValue, count });
    }, 200);
    return () => clearTimeout(debounce);
  }, [debouncedValue]);

  return (
    <div className="aside-list-item">
      <CircleButton
        onClick={() => removeListItem({ id })}
        backgroundColor="#e67e22"
        label="Remove item from list"
      >
        <CloseIcon fill="#fff" />
      </CircleButton>
      <TextInput value={text} onChange={setDebouncedValue} maxLength={20} />
      <Counter
        state={count}
        setState={(value) => updateListItem({ id, text, count: value })}
      />
    </div>
  );
}

export default React.memo(AsideListItem);
