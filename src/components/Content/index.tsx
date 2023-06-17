import { useState } from "react";
import { useRecoilValue } from "recoil";

import { ReactComponent as SkipIcon } from "../../assets/icons/skip.svg";

import { printerListAtom } from "../../store";

import Printer from "../Printer";
import TextButton from "../_Atoms/TextButton";
import Result from "../Result";

function Content() {
  const printerList = useRecoilValue(printerListAtom);
  const [showResult, setShowResult] = useState(false);

  return (
    <div className="content">
      <div className="content-section">
        <Printer />
        {printerList.length !== 0 && (
          <TextButton
            text="Results"
            onClick={() => setShowResult(true)}
            backgroundColor="transparent"
            color="#aaa"
            icon={<SkipIcon fill="#aaa" />}
          />
        )}
        {showResult && <Result closer={() => setShowResult(false)} />}
      </div>
    </div>
  );
}

export default Content;
