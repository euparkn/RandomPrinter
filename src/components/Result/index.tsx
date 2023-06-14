import { useRecoilValue } from "recoil";

import { printerListAtom } from "../../store";

import ListItem from "../_Molecules/ListItem";
import TextButton from "../_Atoms/TextButton";

function Result({ closer }: { closer: () => void }) {
  const printerList = useRecoilValue(printerListAtom);

  return (
    <div className="result">
      <h1>Results</h1>
      <div className="result-list">
        {printerList.map((item, i) => (
          <ListItem key={Math.random()} num={i + 1} text={item} />
        ))}
      </div>
      <div className="result-btn">
        <TextButton text="Close" onClick={closer} color="#5499c7" />
        <TextButton text="Copy" backgroundColor="#5499c7" color="#f8f8f8" />
      </div>
    </div>
  );
}

export default Result;
