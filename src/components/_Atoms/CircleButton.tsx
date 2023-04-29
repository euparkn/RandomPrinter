import { IconTypes } from "../../types/svgIconTypes";
import SvgIcon from "./SvgIcon";

interface IProps {
  iconType: IconTypes;
  disabled?: boolean;
  onClick?: () => void;
}

function CircleButton({
  iconType,
  disabled = false,
  onClick = undefined,
}: IProps) {
  return (
    <button
      className={`circle_button ${iconType}`}
      type="button"
      disabled={disabled}
      onClick={onClick}
    >
      <SvgIcon type={iconType} />
    </button>
  );
}

export default CircleButton;
