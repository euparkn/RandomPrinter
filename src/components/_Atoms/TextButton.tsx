import { IconTypes } from "../../types/svgIconTypes";
import SvgIcon from "./SvgIcon";

interface IProps {
  text?: string;
  IconType?: IconTypes;
  onClick?: () => void;
}

function TextButton({ text, IconType, onClick }: IProps) {
  return (
    <button
      className={`text-button ${IconType}`}
      type="button"
      onClick={onClick}
    >
      <SvgIcon type={IconType} />
      {text}
    </button>
  );
}

export default TextButton;
