import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";

import { printerListAtom } from "../../store";

import ListItem from "../_Molecules/ListItem";
import TextButton from "../_Atoms/TextButton";

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
      <h1>Results</h1>
      <div className="result-list">
        {printerList.map((item, i) => (
          <ListItem key={Math.random()} num={i + 1} text={item} />
        ))}
      </div>
      <div className="result-btn">
        <TextButton
          text="Restart"
          onClick={() => navigate(-1)}
          color="#5499c7"
        />
        <TextButton text="Copy" backgroundColor="#5499c7" color="#f8f8f8" />
      </div>
    </div>
  );
}

export default Result;
