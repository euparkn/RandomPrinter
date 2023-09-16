import { useRecoilValue, useSetRecoilState } from "recoil";

import { ReactComponent as CopyIcon } from "assets/icons/copy.svg";

import { printerListAtom, toastAtom } from "store";

import ListItem from "components/_Molecules/ListItem";
import TextButton from "components/_Atoms/TextButton";

function Result({ closer }: { closer: () => void }) {
  const setToast = useSetRecoilState(toastAtom);

  const printerList = useRecoilValue(printerListAtom);

  const copyListToClipboard = (textList: string[]) => {
    navigator.clipboard.writeText(textList.join(", ")).then(() => {
      setToast({ text: "Copied to clipboard", state: true });
    });
  };

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
          icon={<CopyIcon fill="#fff" />}
          backgroundColor="#5499c7"
          color="#f8f8f8"
          onClick={() => copyListToClipboard(printerList)}
        >
          Copy to Clipboard
        </TextButton>
        <TextButton onClick={closer} color="#5499c7">
          Close
        </TextButton>
      </div>
    </div>
  );
}

export default Result;
