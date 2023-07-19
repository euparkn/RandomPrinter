import { ReactNode } from "react";

interface IProps {
  children?: string;
  onClick?: () => void;
  disabled?: boolean;
  icon?: ReactNode;
  backgroundColor?: string;
  color?: string;
}

function TextButton({
  children,
  onClick,
  disabled,
  icon,
  backgroundColor = "#fff",
  color = "#333",
}: IProps) {
  return (
    <button
      className="text-button"
      type="button"
      onClick={onClick}
      disabled={disabled}
      style={{ backgroundColor, color }}
    >
      {icon}
      {children}
    </button>
  );
}

export default TextButton;
