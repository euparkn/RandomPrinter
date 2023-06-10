import { useRecoilValue } from "recoil";
import { printerListAtom } from "../../store";
import ListItem from "../_Molecules/ListItem";

function Result() {
  const printerList = useRecoilValue(printerListAtom);
  return (
    <div className="result">
      <div className="result-list">
        {printerList.map((item, i) => (
          <ListItem key={Math.random()} num={i + 1} text={item} />
        ))}
      </div>
    </div>
  );
}

export default Result;
