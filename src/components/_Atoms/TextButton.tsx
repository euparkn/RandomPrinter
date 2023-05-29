import { IconTypes } from "../../types/svgIconTypes";
import SvgIcon from "./SvgIcon";

interface IProps {
  text?: string;
  IconType?: IconTypes;
  onClick?: () => void;
  disabled?: boolean;
}

function TextButton({ text, IconType, onClick, disabled }: IProps) {
  return (
    <button
      className={`text-button ${IconType}`}
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      <SvgIcon type={IconType} />
      {text}
    </button>
  );
}

export default TextButton;
