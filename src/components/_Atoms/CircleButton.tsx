import { IconTypes } from "../../types/svgIconTypes";
import SvgIcon from "./SvgIcon";

interface IProps {
  buttonType: IconTypes;
  disabled?: boolean;
  onClick?: () => void;
}

function CircleButton({
  buttonType,
  disabled = false,
  onClick = undefined,
}: IProps) {
  return (
    <button
      className={`circle_button ${buttonType}`}
      type="button"
      disabled={disabled}
      onClick={onClick}
    >
      <SvgIcon type={buttonType} />
    </button>
  );
}

export default CircleButton;
