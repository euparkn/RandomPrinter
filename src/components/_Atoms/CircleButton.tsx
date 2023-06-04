import { ReactNode } from "react";

import { ReactComponent as AddIcon } from "../../assets/icons/add.svg";

interface IProps {
  disabled?: boolean;
  onClick?: () => void;
  children: ReactNode;
  backgroundColor?: string;
}

function CircleButton({
  disabled = false,
  onClick = undefined,
  children = <AddIcon />,
  backgroundColor = "#fff",
}: IProps) {
  return (
    <button
      className="circle_button"
      type="button"
      disabled={disabled}
      onClick={onClick}
      style={{ backgroundColor }}
    >
      {children}
    </button>
  );
}

export default CircleButton;
