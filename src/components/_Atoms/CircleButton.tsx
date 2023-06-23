import { ReactNode } from "react";

import { ReactComponent as AddIcon } from "../../assets/icons/add.svg";

interface IProps {
  disabled?: boolean;
  onClick?: () => void;
  children: ReactNode;
  backgroundColor?: string;
  label: string;
}

function CircleButton({
  disabled = false,
  onClick = undefined,
  children = <AddIcon />,
  backgroundColor = "#fff",
  label,
}: IProps) {
  return (
    <button
      className="circle-button"
      type="button"
      disabled={disabled}
      onClick={onClick}
      style={{ backgroundColor }}
      aria-label={label}
    >
      {children}
    </button>
  );
}

export default CircleButton;
