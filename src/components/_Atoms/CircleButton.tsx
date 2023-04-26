import { ReactComponent as AddIcon } from "../../assets/icons/add.svg";
import { ReactComponent as RemoveIcon } from "../../assets/icons/remove.svg";
import { ReactComponent as CloseIcon } from "../../assets/icons/close.svg";

type ButtonTypes = "add" | "remove" | "close";

interface IProps {
  buttonType: ButtonTypes;
  disabled?: boolean;
  onClick?: () => void;
}

const buttonIcon = (type: ButtonTypes) => {
  switch (type) {
    case "add":
      return <AddIcon />;
    case "remove":
      return <RemoveIcon />;
    case "close":
      return <CloseIcon />;
    default:
      return undefined;
  }
};

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
      {buttonIcon(buttonType)}
    </button>
  );
}

export default CircleButton;
