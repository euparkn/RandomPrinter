import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";

import { ReactComponent as SkipIcon } from "../../assets/icons/skip.svg";

import { printerListAtom } from "../../store";

import Printer from "../Printer";
import AsideToggleButton from "../_Atoms/AsideTogglebutton";
import TextButton from "../_Atoms/TextButton";

function Content() {
  const navigate = useNavigate();

  const printerList = useRecoilValue(printerListAtom);

  return (
    <div className="content">
      <div className="content-section">
        <Printer />
        <AsideToggleButton />
        {printerList.length !== 0 && (
          <TextButton
            text="Skip"
            onClick={() => navigate("/result")}
            backgroundColor="transparent"
            color="#aaa"
            icon={<SkipIcon fill="#aaa" />}
          />
        )}
      </div>
    </div>
  );
}

export default Content;
