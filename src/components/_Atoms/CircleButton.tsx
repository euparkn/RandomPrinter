import { ReactNode } from "react";

import { ReactComponent as AddIcon } from "../../assets/icons/add.svg";

interface IProps {
  disabled?: boolean;
  onClick?: () => void;
  children: ReactNode;
}

function CircleButton({
  disabled = false,
  onClick = undefined,
  children = <AddIcon />,
}: IProps) {
  return (
    <button
      className="circle_button"
      type="button"
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default CircleButton;
