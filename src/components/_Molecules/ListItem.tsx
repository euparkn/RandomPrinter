import { useState } from "react";
import CircleButton from "../_Atoms/CircleButton";
import TextInput from "../_Atoms/TextInput";
import Counter from "./Counter";

function ListItem() {
  const [text, setText] = useState("Name");
  const [num, setNum] = useState(1);

  return (
    <div className="list-item">
      <CircleButton iconType="close" onClick={() => console.log("close")} />
      <TextInput value={text} onChange={setText} />
      <Counter count={num} setCount={setNum} />
    </div>
  );
}

export default ListItem;
