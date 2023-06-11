import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { printerListAtom } from "../../store";
import ListItem from "../_Molecules/ListItem";

function Result() {
  const navigate = useNavigate();
  const printerList = useRecoilValue(printerListAtom);

  useEffect(() => {
    if (printerList.length === 0) {
      navigate("/");
    }
  }, []);

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
