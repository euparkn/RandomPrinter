import { ReactComponent as SkipIcon } from "../../assets/icons/skip.svg";
import { ReactComponent as AddIcon } from "../../assets/icons/add.svg";

type TextIconTypes = "add" | "skip" | undefined;

interface IProps {
  text?: string;
  IconType?: TextIconTypes;
  onClick?: () => void;
}

const buttonIcon = (type: TextIconTypes) => {
  switch (type) {
    case "add":
      return <AddIcon />;
    case "skip":
      return <SkipIcon />;
    default:
      return undefined;
  }
};

function TextButton({ text, IconType, onClick }: IProps) {
  return (
    <button
      className={`text-button ${IconType}`}
      type="button"
      onClick={onClick}
    >
      {buttonIcon(IconType)}
      {text}
    </button>
  );
}

export default TextButton;
